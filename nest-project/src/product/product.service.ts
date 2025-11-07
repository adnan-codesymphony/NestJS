import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  create(productDetails: CreateProductDto) {
    const newproduct = new Product();
    newproduct.pname = productDetails.pname;
    newproduct.pdesc = productDetails.pdesc;
    newproduct.pprice = productDetails.pprice;
    this.productRepository.save(newproduct);
  }
}
