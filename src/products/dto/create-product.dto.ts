import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  brandId: number;

  @IsNumber()
  categoryId: number;

  @IsString()
  image: string;
}
