import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository], //referências para classe que o nest gerencie a criação do objeto.
})
export class UserModule {}
