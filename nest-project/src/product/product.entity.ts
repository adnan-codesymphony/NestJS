import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  pid: number;

  @Column()
  pname: string;

  @Column()
  pdesc: string;

  @Column()
  pprice: string;
}
