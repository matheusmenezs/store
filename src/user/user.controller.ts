import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { UserRepository } from './user.repository';

export type userDto = {
  name: string;
  email: string;
  password: string;
};

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @Post()
  async createUser(@Body() userData: userDto) {
    this.userRepository.save(userData);
    return { status: 'user created' };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
