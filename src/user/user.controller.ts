import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { v4 as uuid } from 'uuid';
import { ListUserDto } from './dto/ListUser.dto';
@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    const userEntity = new UserEntity();

    userEntity.name = userData.name;
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new ListUserDto(userEntity.id, userEntity.name),
      message: 'User created',
    };
  }

  @Get()
  async listUsers() {
    const saveUsers = await this.userRepository.list();

    const listUsers = saveUsers.map(
      (user) => new ListUserDto(user.id, user.name),
    );

    return listUsers;
  }
}
