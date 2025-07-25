// products.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
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
    @Body('image') image: string,
  ) {
    return this.productService.create({ name, description, price, brandId, categoryId, image });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
