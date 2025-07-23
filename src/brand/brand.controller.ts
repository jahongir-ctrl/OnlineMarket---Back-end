import { Controller, Get, Post, Body } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.brandService.create(name);
  }
}
