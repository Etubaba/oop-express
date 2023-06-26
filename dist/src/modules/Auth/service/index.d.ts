import { PrismaClient, Users } from "@prisma/client";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
import { Email } from "../dto/email.dto";
import { otpDTO } from "../dto/otp.dto";
export default class userService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createUser(userdata: RegisterDto, ref: string): Promise<{
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
    adminLogin(admindata: LoginDto): Promise<{
        status: boolean;
        message: string;
    } | {
        id: string;
        email: string;
        password: string;
        name: string;
        created_at: Date;
        updated_at: Date;
        status: boolean;
        message: string;
    }>;
    sendOTP(email: Email): Promise<{
        status: boolean;
        message: string;
    }>;
    verifyOTP(email: string, otp: otpDTO): Promise<{
        status: boolean;
        message: string;
    }>;
}
