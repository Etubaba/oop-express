"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
let PrismaService = exports.PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect().then(() => {
            console.log("Database Connected==========🔗🔗🔗🔗🔗🔗🔗🔗=======>");
        }).catch((error) => {
            console.log(error.message);
        });
    }
};
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map