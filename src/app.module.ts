import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';  // <-- Добавляем импорт
import { ProductsModule } from './products/products.module';
import { PrismaService } from 'src/prisma/prisma.service';



@Module({
  
  imports: [
    PrismaModule,  // <-- Добавляем PrismaModule в imports
    AuthModule, 
    UsersModule, ProductsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}