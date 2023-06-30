import { IsNotEmpty, IsOptional } from 'class-validator';
import { investmentOptDto } from './investmentOpt.dto';
import { Transform } from 'class-transformer';

export class UpdateInvestmentOptDto {
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    iof: number

    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    roi: number

    @IsOptional()
    completed: boolean
}
