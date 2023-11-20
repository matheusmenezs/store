import {
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { EmailIsUnique } from '../validator/single-email.validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @EmailIsUnique({ message: 'user email already exists' })
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}
