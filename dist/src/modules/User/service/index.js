"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@/utils/HttpException");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
let userService = class userService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async creatuser_transation(transactiondata) {
        try {
            const user = await this.prisma.users.findUnique({
                where: {
                    id: transactiondata.id
                }
            });
            if (!user) {
                return {
                    status_code: 404,
                    status: false,
                    message: "user not found"
                };
            }
            const createtrn = await this.prisma.transactions.create({
                data: {
                    amount: transactiondata.amount, method: transactiondata.method, status: transactiondata.status, recipient: transactiondata.id, trxId: transactiondata.id
                }
            });
            return {
                status: true, message: "transaction created succesfully", data: createtrn, status_code: 200
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async findAll() {
        try {
            const user = await this.prisma.users.findMany({
                include: {
                    investments: true, transaction_histories: true
                }
            });
            return {
                status_code: 200,
                status: true,
                message: "user fetched sucessfully",
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
    async findOne(id) {
        try {
            const user = await this.prisma.users.findUnique({
                where: {
                    id
                },
                include: {
                    investments: true, transaction_histories: true
                }
            });
            if (!user) {
                return {
                    status_code: 404,
                    status: false,
                    message: "user not found"
                };
            }
            delete user.password;
            return {
                status_code: 200,
                status: true,
                message: "user fetched sucessfully",
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
    async deleteUser(id) {
        try {
            const user = await this.prisma.users.delete({
                where: {
                    id
                }
            });
            if (!user) {
                return {
                    status_code: 404,
                    status: false,
                    message: "user not found"
                };
            }
            delete user.password;
            return {
                status_code: 200,
                status: true,
                message: "user deleted sucessfully",
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
    async update(id, updatedata) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { id },
                include: {
                    transaction_histories: true, investments: true
                }
            });
            if (!user) {
                return {
                    status: false,
                    status_code: 404,
                    message: "user not found"
                };
            }
            await this.prisma.users.update({
                where: { id },
                data: {
                    deposit: updatedata.deposit, profits: updatedata.profits, referal_award: updatedata.referal_award
                }
            });
            return {
                status_code: 200, status: true, message: "user updated succesfully",
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