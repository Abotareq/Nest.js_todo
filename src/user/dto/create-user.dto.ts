/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name:string
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(6, 12, { message: "password must be between 6 and 12" })
  password: string;
}
