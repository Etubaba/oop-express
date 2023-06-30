import { PrismaClient, Users } from "@prisma/client";
import { RegisterDto } from "../Dto/register.dto";
import { LoginDto } from "../Dto/login.dto";
import { Email } from "../Dto/email.dto";
import { otpDTO } from "../Dto/otp.dto";
export default class authService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createUser(userdata: RegisterDto, ref: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    }>;
    loginUser(logindata: LoginDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        message: string;
        data: Users;
        status?: undefined;
    }>;
    adminLogin(admindata: LoginDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    } | {
        id: string;
        email: string;
        password: string;
        name: string;
        created_at: Date;
        updated_at: Date;
        status_code: number;
        status: boolean;
        message: string;
    }>;
    sendOTP(email: Email): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    }>;
    verifyOTP(email: string, otp: otpDTO): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    }>;
}
