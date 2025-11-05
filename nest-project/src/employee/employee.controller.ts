import { Controller, Get, Param, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly empService: EmployeeService) {}
  @Get('hello')
  getHello(): string {
    return this.empService.getHello();
  }

  @Get('hello/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.empService.getHelloWithName(name);
  }

  @Get('query')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.empService.getHelloWithName(name || 'world');
  }
}
