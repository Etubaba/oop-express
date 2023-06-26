import { CreateAdminDto } from "../dto/create-admin.dto";
import { PrismaClient } from "@prisma/client";
export default class adminService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createAdmin(admindata: CreateAdminDto): Promise<{
        status: boolean;
        message: string;
        data: import(".prisma/client").Administrators;
    }>;
}
