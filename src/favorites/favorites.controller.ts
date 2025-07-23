import { Controller, Post, Delete, Get, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Post(':userId/:productId')
  add(@Param('userId') userId: string, @Param('productId') productId: string) {
    return this.favoritesService.addToFavorites(+userId, +productId);
  }

  @Delete(':userId/:productId')
  remove(@Param('userId') userId: string, @Param('productId') productId: string) {
    return this.favoritesService.removeFromFavorites(+userId, +productId);
  }

  @Get(':userId')
  getAll(@Param('userId') userId: string) {
    return this.favoritesService.getUserFavorites(+userId);
  }
}
