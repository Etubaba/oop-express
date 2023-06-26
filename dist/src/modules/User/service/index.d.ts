import { PrismaClient } from "@prisma/client";
import { CreateTrnDto } from "../dto/create_transaction.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export default class userService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    creatuser_transation(transactiondata: CreateTrnDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status: boolean;
        message: string;
        data: import(".prisma/client").Transactions;
        status_code: number;
    }>;
    findAll(): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: (import(".prisma/client").Users & {
            transaction_histories: import(".prisma/client").Transactions[];
            investments: import(".prisma/client").InvestmentOpt[];
        })[];
    }>;
    findOne(id: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: import(".prisma/client").Users & {
            transaction_histories: import(".prisma/client").Transactions[];
            investments: import(".prisma/client").InvestmentOpt[];
        };
    }>;
    deleteUser(id: string): Promise<{
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
    update(id: string, updatedata: UpdateUserDto): Promise<{
        status: boolean;
        status_code: number;
        message: string;
    }>;
}
