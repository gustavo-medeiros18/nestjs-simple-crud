import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    /*const productId = Math.random().toString();
  
    this.products.push(newProduct);

    return productId;*/
  }

  getProducts() {
    /*return [...this.products];*/
  }

  getSingleProduct(productId) {
    /*const product = this.findProduct(productId)[0];
    return { ...product };*/
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    /*const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };

    if (title) updatedProduct.title = title;
    if (description) updatedProduct.description = description;
    if (price) updatedProduct.price = price;

    this.products[index] = updatedProduct;*/
  }

  deleteProduct(productId: string) {
    /*const index = this.findProduct(productId)[1];
    this.products.splice(index, 1);*/
  }

  /*private findProduct(productId: string): [Product, number] {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === productId,
    );
    const product = this.products[productIndex];

    if (!product) throw new NotFoundException('Could not find product.');

    return [product, productIndex];
  }*/
}
