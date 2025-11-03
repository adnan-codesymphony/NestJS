import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('find')
  //@Redirect('/')
  find(): string {
    return 'All users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is a user with id ${id}`;
  }

  @Post('create')
  create(): string {
    return 'This action creates new user';
  }
}
