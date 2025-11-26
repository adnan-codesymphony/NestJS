import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  empId: number;

  @Column()
  designation: string;

  @Column()
  department: string;

  @Column()
  salary: number;

  @ManyToOne(() => User, (user) => user.employees)
  user: User;
}
