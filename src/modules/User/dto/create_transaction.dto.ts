import { IsEmail, IsNotEmpty, IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { Transform } from "class-transformer";
export class CreateTrnDto {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNotEmpty()
    @IsBoolean()
    status: boolean

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => String(value))
    method: string



}
