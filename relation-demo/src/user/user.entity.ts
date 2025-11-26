import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonalDetails } from '../personal-details/personal-details.entity';
import { Employee } from '../employee/employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => PersonalDetails, (personalDetails) => personalDetails.user)
  personalDetails: PersonalDetails;

  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];
}
