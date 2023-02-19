import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    this.userRepository.save(userData);
    return { status: 'user created' };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
