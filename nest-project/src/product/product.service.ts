import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(productDetails: CreateProductDto) {
    const newproduct = { ...new Product(), ...productDetails };
    return this.productRepository.save(newproduct);
  }

  find() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.find({ where: { pid: id } });
  }

  update(id: number, updateDetails: UpdateProductDto) {
    const updateProduct = { ...updateDetails };
    return this.productRepository.update(id, updateProduct);
  }

  delete(id: number) {
    return this.productRepository.delete(id);
  }
}

// const newproduct = new Product();
// newproduct.pname = productDetails.pname;
// newproduct.pdesc = productDetails.pdesc;
// newproduct.pprice = productDetails.pprice;

//---------------------------------------------------
// const updateProduct = {
//       pname: updateDetails.pname,
//       pdesc: updateDetails.pdesc,
//       pprice: updateDetails.pprice,
//     };
