import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsPhoneNumber("BD")
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  address: string;
}
