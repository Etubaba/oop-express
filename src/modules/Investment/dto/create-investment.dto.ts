import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateInvestmentDto {
    @IsNotEmpty()
    @IsString()
    type: string


    @IsNotEmpty()
    @IsString()
    description: string


    @IsNotEmpty()
    @IsString()
    duration: string


    @IsNotEmpty()
    @IsString()
    percentage: string


    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    min_deposit: number

    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    max_deposit: number




}
