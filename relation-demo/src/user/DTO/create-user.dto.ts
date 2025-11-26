//import { IsString } from 'class-validator';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateEmployeeDto } from './create-emp.dto';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Fullname is required' })
  @IsString({ message: 'Fullname must be a String' })
  @MinLength(4, { message: 'Fullname must be at least 4 characters long' })
  @MaxLength(25, { message: 'Fullname can not be longer than 25 characters' })
  fullname: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be an Email' })
  @MinLength(4, { message: 'Email must be at least 4 characters long' })
  @MaxLength(30, { message: 'Email can not be longer than 30 characters' })
  email: string;

  password: string;

  gender: string;

  age: number;

  address: string;

  employees: CreateEmployeeDto[];
}
