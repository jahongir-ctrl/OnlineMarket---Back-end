import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() dto: CreateBrandDto) {
    return this.brandsService.create(dto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
