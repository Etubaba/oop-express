import { IsOptional } from 'class-validator';
import { CreateInvestmentDto } from './create-investment.dto';

export class UpdateInvestmentDto extends CreateInvestmentDto {
    @IsOptional()
    status: boolean
}
