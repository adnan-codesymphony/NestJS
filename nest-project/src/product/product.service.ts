import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInterface } from './interface/ProductInterface.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(productDetails: ProductInterface) {
    return this.productRepository.save({ ...new Product(), ...productDetails });
  }

  find() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.find({ where: { pid: id } });
  }

  update(id: number, updateDetails: ProductInterface) {
    return this.productRepository.update(id, { ...updateDetails });
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
