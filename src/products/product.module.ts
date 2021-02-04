import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
