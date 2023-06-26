import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { RegisterDto } from '../../Auth/Dto/register.dto';

export class UpdateUserDto extends RegisterDto{

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => Number(value))
    deposit: number

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => Number(value))
    profits: number

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => Number(value))
    referal_award: number
}
