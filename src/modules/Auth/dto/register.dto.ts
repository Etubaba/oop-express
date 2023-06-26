import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { Transform } from "class-transformer";
export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    full_name: string



    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => String(value))
    phone: string

    @IsString()
    @IsNotEmpty()
    country: string


    @IsString()
    @IsNotEmpty()
    password: string




}
