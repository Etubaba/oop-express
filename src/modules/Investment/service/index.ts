import { Service } from "typedi";
import { CreateInvestmentDto } from "../dto/create-investment.dto";
import { HttpException } from "@/utils/HttpException";
import { PrismaClient } from "@prisma/client";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";

@Service()
export default class InvestmentService {

    public prisma = new PrismaClient

    async create(createInvestmentDto: CreateInvestmentDto) {
        try {
            const createPlan = await this.prisma.plans.create({
                data: {
                    description: createInvestmentDto.description, duration: createInvestmentDto.duration, max_deposit: createInvestmentDto.max_deposit, min_deposit: createInvestmentDto.min_deposit, percentage: createInvestmentDto.percentage, type: createInvestmentDto.type,
                }
            })
            return {
                status_code: 200,
                status: true,
                message: "plan created successfully",
                data: createPlan
            }
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }
    }


    async findAll() {
        try {
            const plans = await this.prisma.plans.findMany({})
            return {
                status_code: 200,
                status: true,
                message: "plan successfully fetched",
                data: plans
            }
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }
    }


    async update(updatedata: UpdateInvestmentDto, id: string) {

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
                }
            }

            const updatePlan = await this.prisma.plans.update({
                where: {
                    id: id
                }, data: {
                    status: updatedata.status
                }
            })
            return {
                status_code: 200,
                status: true,
                message: "plan status updated",
                data: updatePlan
            };
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }

    }


}