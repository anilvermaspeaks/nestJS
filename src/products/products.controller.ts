import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController{
  constructor(private prodService: ProductService){};
  @Post()
  addProduct(
    @Body('title') prodTitle:string,
    @Body('description') des: string,
    @Body('price') price: number,
  ): any {
    const id = this.prodService.addProduct(prodTitle, des, price);

return {id}

    }



}

