import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../validator/single-email.validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @EmailIsUnique({ message: 'user email already exists' })
  email: string;

  @MinLength(6)
  password: string;
}
