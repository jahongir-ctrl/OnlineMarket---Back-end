// product.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('by-brand')
  findByBrand(@Query('brandId') brandId: string) {
    return this.productService.findByBrand(Number(brandId));
  }

  @Get('by-category')
  findByCategory(@Query('categoryId') categoryId: string) {
    return this.productService.findByCategory(Number(categoryId));
  }

  @Post()
  create(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('brandId') brandId: number,
    @Body('categoryId') categoryId: number,
  ) {
    return this.productService.create({ name, description, price, brandId, categoryId });
  }
}
