import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateAdminDto {


    @IsNotEmpty()
    @IsEmail()
    email: string


    @IsString()
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsString()
    name: string
}
