import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const id = await this.productService.insertProduct(
      title,
      description,
      price,
    );

    return {
      insertedId: id,
    };
  }

  @Get()
  getAllProducts() {
    const products = this.productService.getProducts();
    return products;
  }

  @Get(':id')
  async getProduct(@Param('id') Productid: string) {
    return await this.productService.getSingleProduct(Productid);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    this.productService.updateProduct(id, title, description, price);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    this.productService.deleteProduct(id);
    return null;
  }
}
