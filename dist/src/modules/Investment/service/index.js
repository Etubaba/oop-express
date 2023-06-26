"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("@/utils/HttpException");
const client_1 = require("@prisma/client");
let InvestmentService = class InvestmentService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async create(createInvestmentDto) {
        try {
            const createPlan = await this.prisma.plans.create({
                data: {
                    description: createInvestmentDto.description, duration: createInvestmentDto.duration, max_deposit: createInvestmentDto.max_deposit, min_deposit: createInvestmentDto.min_deposit, percentage: createInvestmentDto.percentage, type: createInvestmentDto.type,
                }
            });
            return {
                status_code: 200,
                status: true,
                message: "plan created successfully",
                data: createPlan
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
            const plans = await this.prisma.plans.findMany({});
            return {
                status_code: 200,
                status: true,
                message: "plan successfully fetched",
                data: plans
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async update(updatedata, id) {
        try {
            const plan = await this.prisma.plans.findUnique({
                where: {
                    id
                }
            });
            if (!plan) {
                return {
                    status_code: 404,
                    status: false,
                    message: "plan not found"
                };
            }
            const updatePlan = await this.prisma.plans.update({
                where: {
                    id: id
                }, data: {
                    status: updatedata.status
                }
            });
            return {
                status_code: 200,
                status: true,
                message: "plan status updated",
                data: updatePlan
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
InvestmentService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], InvestmentService);
exports.default = InvestmentService;
//# sourceMappingURL=index.js.map