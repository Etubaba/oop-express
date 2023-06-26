import { Transform } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class investmentOptDto {

    @IsString()
    @IsNotEmpty()
    plan_type: string

    @IsString()
    @IsNotEmpty()
    months: string

    @IsDateString()
    @IsNotEmpty()
    plan_duration: Date


    @IsString()
    @IsNotEmpty()
    percentage_returns: string


    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    iof: number

    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    roi: number
}