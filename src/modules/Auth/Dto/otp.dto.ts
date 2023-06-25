import { IsNotEmpty, IsString } from "class-validator";

export class otpDTO {
    @IsNotEmpty()
    @IsString()
    otp: string
}