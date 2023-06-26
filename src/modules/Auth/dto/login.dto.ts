import { Transform } from "class-transformer"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"



export  class LoginDto {

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => String(value).toLowerCase())
    emailORphone: string


    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => String(value))
    password: string
}