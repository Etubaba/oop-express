import { PrismaClient } from "@prisma/client";
import { CreateTodoDto } from "./Dto/create.dto";
export declare class todoService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createTodo(createTodo: CreateTodoDto): Promise<{
        message: string;
    }>;
}
