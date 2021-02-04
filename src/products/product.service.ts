import { Injectable } from '@nestjs/common';
import { Product } from './product.modal';
@Injectable()
export class ProductService {
private products = [];

  addProduct(title: string, desc: string, price: number) {
      const prodId = new Date().toString();
    const newProduct = new Product(new Date().toString(), title, desc, price);
    this.products.push(newProduct)
console.log(this.products)
    return prodId;
}

}
