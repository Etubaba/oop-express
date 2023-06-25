"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("@/utils/HttpException");
const client_1 = require("@prisma/client");
const argon = tslib_1.__importStar(require("argon2"));
let adminService = class adminService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async createAdmin(admindata) {
        console.log(admindata);
        try {
            const hashed = await argon.hash(admindata.password);
            const admin = await this.prisma.administrators.create({
                data: {
                    email: admindata.email, name: admindata.name, password: hashed
                }
            });
            delete admin.password;
            if (admin) {
                return {
                    status: true,
                    message: "admin created successfully",
                    data: admin,
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
adminService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], adminService);
exports.default = adminService;
//# sourceMappingURL=index.js.map