import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module'; 
import { ProductsModule } from './products/products.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { BrandController } from './brand/brand.controller';
import { BrandService } from './brand/brand.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { FavoritesService } from './favorites/favorites.service';
import { FavoritesController } from './favorites/favorites.controller';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';








@Module({
  
  imports: [
    PrismaModule,
    AuthModule, 
    UsersModule,
   ProductsModule,
    BrandsModule,
    CategoriesModule,
  ],
  controllers: [AppController , BrandController, CategoryController , FavoritesController , CartController],
  providers: [AppService , PrismaService, BrandService, CategoryService, FavoritesService , CartService],
})
export class AppModule {}