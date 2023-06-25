"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = tslib_1.__importStar(require("typedi"));
const HttpException_1 = require("../../../utils/HttpException");
const argon = tslib_1.__importStar(require("argon2"));
const crypto_1 = require("crypto");
const runtime_1 = require("@prisma/client/runtime");
const otp_template_1 = require("@/modules/Email/templates/otp.template");
const service_1 = tslib_1.__importDefault(require("@/modules/Email/service"));
let userService = class userService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async createUser(userdata, ref) {
        try {
            const chechReferalCode = async () => {
                const checkRef = await this.prisma.users.findUnique({
                    where: {
                        referal_code: ref,
                    }
                });
                return checkRef;
            };
            if (ref != "undefined") {
                const checkRef = chechReferalCode();
                if (!checkRef) {
                    return {
                        status: false,
                        message: "No user with such referal_code"
                    };
                }
                await this.prisma.users.update({
                    where: {
                        referal_code: ref
                    }, data: {
                        referal_award: (await checkRef).referal_award + 250,
                        referals: [...(await checkRef).referals, ref]
                    }
                });
            }
            const checkEmail = await this.prisma.users.findUnique({
                where: {
                    email: userdata.email,
                }
            });
            if (checkEmail) {
                return {
                    status: false,
                    message: "Email already exists kindly login"
                };
            }
            const checkPhone = await this.prisma.users.findUnique({
                where: {
                    phone: userdata.phone
                }
            });
            if (checkPhone) {
                return {
                    status: false,
                    message: "Phone number already exists kindly login"
                };
            }
            function referal_code(size) {
                return (0, crypto_1.randomBytes)(Math.ceil(size / 2))
                    .toString('hex') // convert to hexadecimal format
                    .slice(0, size).toUpperCase(); // return required number of characters
            }
            const hashed_password = await argon.hash(userdata.password);
            const user = await this.prisma.users.create({
                data: {
                    full_name: userdata.full_name,
                    email: userdata.email,
                    phone: userdata.phone,
                    password: hashed_password,
                    country: userdata.country,
                    referal_code: referal_code(4) + "-" + referal_code(4),
                    referal_award: ref !== "undefined" ? chechReferalCode() ? 100 : 0 : 0
                },
            });
            return {
                status: true,
                message: "user created",
            };
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new HttpException_1.HttpException(400, `Email alredy exist`);
                }
            }
            else {
                throw new HttpException_1.HttpException(500, `${error}`);
            }
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async loginUser(logindata) {
        try {
            let user;
            const checkIfEmail = logindata.emailORphone.includes("@");
            if (checkIfEmail) {
                user = await this.prisma.users.findUnique({
                    where: {
                        email: logindata.emailORphone
                    },
                    include: {
                        investments: true,
                        transaction_histories: true
                    }
                });
            }
            else {
                user = await this.prisma.users.findUnique({
                    where: {
                        phone: logindata.emailORphone,
                    },
                    include: {
                        investments: true, transaction_histories: true
                    }
                });
            }
            if (!user) {
                return {
                    status: false,
                    message: "Invalid email address or phone"
                };
            }
            const isValid = await argon.verify(user.password, logindata.password);
            if (!isValid) {
                return {
                    status: false,
                    message: "incorrect password"
                };
            }
            user === null || user === void 0 ? true : delete user.password;
            return {
                message: 'login success',
                data: user
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async adminLogin(admindata) {
        try {
            const user = await this.prisma.administrators.findUnique({
                where: {
                    email: admindata.emailORphone,
                }
            });
            if (!user) {
                return {
                    status: false,
                    message: "Invalid email address or password"
                };
            }
            // checking if password is correct ####################
            const isValid = await argon.verify(user.password, admindata.password);
            if (!isValid) {
                return {
                    status: false,
                    message: "incorrect password"
                };
            }
            user === null || user === void 0 ? true : delete user.password;
            return Object.assign({ status: true, message: "Login success" }, user);
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async sendOTP(email) {
        const emailService = typedi_1.default.get(service_1.default);
        try {
            let user;
            // checking if loggin method is email or phone number #############
            const checkIfEmailExist = await this.prisma.users.findUnique({
                where: {
                    email: email.email
                },
                include: {
                    otp: true
                }
            });
            if (!checkIfEmailExist) {
                return {
                    status: false,
                    message: "Invalid email address"
                };
            }
            function generateOTP() {
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 5; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            const getToday = new Date();
            getToday.setMinutes(getToday.getMinutes() + 10);
            const OTP = generateOTP();
            if (checkIfEmailExist.otp !== null) {
                await this.prisma.users.update({
                    where: {
                        email: email.email
                    },
                    data: {
                        otp: {
                            update: {
                                code: OTP, expiration: getToday.toISOString()
                            }
                        }
                    }
                });
                const resetEmail = (0, otp_template_1.sendOTP)(OTP, checkIfEmailExist.full_name);
                await emailService.SendEmail({ email: checkIfEmailExist.email, title: "OTP", html: resetEmail, noreply: true });
            }
            else {
                await this.prisma.users.update({
                    where: {
                        email: checkIfEmailExist.email
                    },
                    data: {
                        otp: {
                            create: {
                                code: OTP, expiration: getToday.toISOString(), id: checkIfEmailExist.id
                            }
                        }
                    }
                });
                const resetEmail = (0, otp_template_1.sendOTP)(OTP, checkIfEmailExist.full_name);
                await emailService.SendEmail({ email: checkIfEmailExist.email, title: "OTP", html: resetEmail, noreply: true });
            }
            return {
                status: true,
                message: "OTP sent successfully",
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async verifyOTP(email, otp) {
        const emailService = typedi_1.default.get(service_1.default);
        try {
            const getToday = new Date();
            const user = await this.prisma.users.findUnique({
                where: {
                    email: email
                },
                include: {
                    otp: true
                }
            });
            if (!user) {
                return {
                    status: false,
                    message: "something is'nt correct try again"
                };
            }
            if (`${user.otp.expiration.toISOString()}` >= `${getToday.toISOString()}`) {
                if (otp.otp == user.otp.code) {
                    await this.prisma.users.update({
                        where: {
                            email: user.email,
                        }, data: {
                            verified: true
                        }
                    });
                    return {
                        status: true,
                        message: "OTP verified"
                    };
                }
                else {
                    return {
                        status: false,
                        message: "OTP Incorrect"
                    };
                }
            }
            else {
                return {
                    status: false,
                    message: "OTP Expired"
                };
            }
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
};
userService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], userService);
exports.default = userService;
//# sourceMappingURL=index.js.map