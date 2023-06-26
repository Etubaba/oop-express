import { IsOptional } from 'class-validator';
import { investmentOptDto } from './investmentOpt.dto';

export class UpdateInvestmentOptDto extends investmentOptDto {
    @IsOptional()
    completed: boolean
}
