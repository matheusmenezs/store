import { Injectable } from '@nestjs/common/decorators';
import { userDto } from './user.controller';

@Injectable() //decorator para torna-lo um provider
export class UserRepository {
  private users = [];

  async save(user: userDto) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}
