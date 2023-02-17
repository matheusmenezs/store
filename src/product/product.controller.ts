import { ProductRepository } from './product.repository';
import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';

export type productDto = {
  name: string;
  price: number;
  available_quantity: number;
  description: string;
  characteristics: Array<Object>;
  category: string;
  created_at: Date;
  updated_at: Date;
};

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: productDto) {
    this.productRepository.save(productData);
    return { status: 'product created' };
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}
