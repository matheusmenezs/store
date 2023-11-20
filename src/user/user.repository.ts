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

  async findById(id: string) {
    const userExists = await this.users.find((user) => (user.id = id));

    if (!userExists) {
      throw new Error('User not exists!');
    }

    return userExists;
  }

  async update(id: string, updateUser: Partial<UserEntity>) {
    const userExists = this.findById(id);

    Object.entries(updateUser).forEach(([key, value]) => {
      console.log(key);
      if (key == 'id') {
        return;
      }

      userExists[key] = value;
    });

    return userExists;
  }

  async delete(id: string) {
    const user = this.findById(id);

    this.users = this.users.filter((userSaved) => userSaved.id !== id);

    return user;
  }
}
