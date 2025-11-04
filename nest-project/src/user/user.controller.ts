import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import data from './data.json';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('user')
export class UserController {
  //@Redirect('/')
  @Get('find')
  find(): object {
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: number): object {
    return data[id - 1];
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action creates new user';
    console.log(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `This action updates a user with id ${id}`;
    console.log(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a user with id ${id}`;
  }
}
