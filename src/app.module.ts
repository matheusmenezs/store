import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
