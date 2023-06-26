import { CreateInvestmentDto } from "../dto/create-investment.dto";
import { PrismaClient } from "@prisma/client";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";
export default class InvestmentService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    create(createInvestmentDto: CreateInvestmentDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Plans;
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
}
