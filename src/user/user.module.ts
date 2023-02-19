import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { SingleEmailValidator } from './validator/single-email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, SingleEmailValidator], //referências para classe que o nest gerencie a criação do objeto.
})
export class UserModule {}
