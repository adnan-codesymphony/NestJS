import { EmployeeInterface } from './EmployeeInterface';

export interface UserInterface {
  fullname: string;
  email: string;
  password: string;
  gender: string;
  age: number;
  address: string;
  employees: EmployeeInterface[];
}
