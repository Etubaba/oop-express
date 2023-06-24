"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../utils/HttpException");
const argon = tslib_1.__importStar(require("argon2"));
let userService = class userService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async createUser(userdata) {
        console.log(userdata);
        try {
            const hashed_password = await argon.hash(userdata.password);
            const user = await this.prisma.users.create({
                data: {
                    full_name: userdata.full_name,
                    email: userdata.email,
                    phone: userdata.phone,
                    password: hashed_password,
                },
            });
            return {
                status: true,
                message: "user created",
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
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
};
userService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], userService);
exports.default = userService;
//# sourceMappingURL=index.js.map