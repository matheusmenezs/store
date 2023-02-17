import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository], //referências para classe que o nest gerencie a criação do objeto.
})
export class ProductModule {}
