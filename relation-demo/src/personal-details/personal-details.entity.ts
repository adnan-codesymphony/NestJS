import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class PersonalDetails {
  @PrimaryGeneratedColumn()
  personalId: number;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.personalDetails)
  @JoinColumn()
  user: User;
}
