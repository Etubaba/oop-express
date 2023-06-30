import { CreateInvestmentDto } from "../dto/create-investment.dto";
import { PrismaClient } from "@prisma/client";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";
import { UpdateInvestmentOptDto } from "../dto/update-investmentOpt.dto";
import { investmentOptDto } from "../dto/investmentOpt.dto";
export default class InvestmentService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    create(createInvestmentDto: CreateInvestmentDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Plans;
    }>;
    createPlan(id: string, createOptionDto: investmentOptDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Users;
    }>;
    findAll(): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Plans[];
    }>;
    update(updatedata: UpdateInvestmentDto, id: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Plans;
    }>;
    updateinvestmentOpt(updatedata: UpdateInvestmentOptDto, user_id: string, planid: string): Promise<{
        staus_code: number;
        status: boolean;
        message: string;
        status_code?: undefined;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").InvestmentOpt[];
        staus_code?: undefined;
    }>;
    remove(id: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Plans;
    }>;
    findOne(id: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        data: import(".prisma/client").Plans;
        message?: undefined;
    }>;
}
