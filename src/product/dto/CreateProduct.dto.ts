import { Type } from 'class-transformer';
import {
  ValidateNested,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  ArrayMinSize,
  IsString,
  IsUUID,
} from 'class-validator';

export class ProductCharacteristicsDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class ProductImagesDto {
  @IsNotEmpty()
  @IsString()
  url: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CreateProductDto {
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  available_quantity: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDto)
  characteristics: ProductCharacteristicsDto[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImagesDto)
  images: ProductImagesDto[];

  @IsNotEmpty()
  @IsString()
  category: string;
}
