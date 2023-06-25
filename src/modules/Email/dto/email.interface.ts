import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EmailData {

  @IsEmail()
  @IsNotEmpty()
  email: string | string[];

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  text?: string;

  @IsString()
  @IsNotEmpty()
  html?: string;

  @IsNotEmpty()
  @IsBoolean()
  noreply: boolean
}
