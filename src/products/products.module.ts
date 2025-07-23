import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule], // <-- здесь
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}