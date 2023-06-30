import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateInvestmentDto } from './create-investment.dto';
import { Transform } from 'class-transformer';

export class UpdateInvestmentDto  {

    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    iof: number

    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    roi: number

    @IsOptional()
    status: boolean
}
