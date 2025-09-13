import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class GetCustomerDto {
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @Min(0)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  offset: number;
}
