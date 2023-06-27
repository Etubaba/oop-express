import { Service } from "typedi";
import { CreateInvestmentDto } from "../dto/create-investment.dto";
import { HttpException } from "../../../utils/HttpException";
import { PrismaClient } from "@prisma/client";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";
import { UpdateInvestmentOptDto } from "../dto/update-investmentOpt.dto";
import { investmentOptDto } from "../dto/investmentOpt.dto";

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
    async createPlan(id: string, createOptionDto: investmentOptDto) {
        try {
            const checkUser = await this.prisma.users.findUnique({
                where: {
                    id
                }
            })


            if (!checkUser) {
                {
                    return {
                        status_code: 404,
                        status: false,
                        message: "user not found"
                    }
                }
            }

            const createPlan = await this.prisma.users.update({
                where: {
                    id
                },
                data: {
                    investments: {
                        create: [
                            {
                                iof: createOptionDto.iof,
                                percentage_returns: createOptionDto.percentage_returns,
                                plan_duration: createOptionDto.plan_duration,
                                plan_type: createOptionDto.plan_type,
                                roi: createOptionDto.roi,
                                months: createOptionDto.months

                            }
                        ]
                    }
                }
            })



            delete createPlan.password
            // await this.emailService.SendEmail({email:})
            return {
                status_code: 200,
                status: true,
                message: "investment created",
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
    async updateinvestmentOpt(updatedata: UpdateInvestmentOptDto, user_id: string, planid: string) {

        try {
            const checkUser = await this.prisma.users.findUnique({
                where: {
                    id: user_id
                }

            });

            if (!checkUser) {
                return {
                    staus_code: 404,
                    status: false,
                    message: "user not found"
                }
            }


            const updatePlan = await this.prisma.users.update({
                where: {
                    id: user_id
                }, data: {
                    investments: {
                        update: [
                            {
                                where: {
                                    id: planid
                                },
                                data: {
                                    completed: updatedata.completed, roi: updatedata.roi, iof: updatedata.iof,
                                }
                            }
                        ]
                    }
                }, include: {
                    investments: true
                }
            })

            return {
                status_code: 200,
                status: true,
                message: "investment plan completed",
                data: updatePlan.investments
            };
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }

    }


    async remove(id: string) {

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

            const planDelete = await this.prisma.plans.delete({
                where: {
                    id
                }
            })

            return {
                status_code: 200,
                status: true,
                message: "plan deleted successfully",
                data: planDelete
            }
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }

    }
    async findOne(id: string) {

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
            return {
                status_code: 200,
                status: true,
                data: plan
            }
        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }

    }


}