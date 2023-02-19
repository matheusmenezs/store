import { ProductRepository } from './product.repository';
import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { CreateProductDto } from './dto/CreateProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    this.productRepository.save(productData);
    return { status: 'product created' };
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}
