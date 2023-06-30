import { RegisterDto } from '../../Auth/Dto/register.dto';
export declare class UpdateUserDto extends RegisterDto {
    deposit: number;
    profits: number;
    referal_award: number;
}
