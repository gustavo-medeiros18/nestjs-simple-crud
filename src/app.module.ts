import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModule } from './products/products.module';

@Module({
  imports: [
    productsModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs-demo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
