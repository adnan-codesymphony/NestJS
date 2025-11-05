import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  getHello(): string {
    return 'Hello Employee';
  }
  getHelloWithName(name: string): string {
    return `Hello ${name}!`;
  }
}
