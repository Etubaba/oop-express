import { PrismaClient, Users } from "@prisma/client";
import { RegisterDto } from "../Dto/register.dto";
import LoginDto from "../Dto/login.dto";
export default class userService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createUser(userdata: RegisterDto): Promise<{
        status: boolean;
        message: string;
    }>;
    loginUser(logindata: LoginDto): Promise<{
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: Users;
        status?: undefined;
    }>;
}
