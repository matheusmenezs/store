import { Injectable } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';

@Injectable() //decorator para torna-lo um provider
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async alreadyExists(email: string) {
    const userExists = this.users.find((user) => user.email === email);
    console.log(userExists);
    return userExists !== undefined;
  }
}
