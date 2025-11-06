import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPostData: Omit<User, 'id'>) {
    return this.userService.create(createPostData);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostData: Partial<Omit<User, 'id'>>,
  ) {
    return this.userService.update(id, updatePostData);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}

/* //@Redirect('/')
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
  --------------------------------------------------------  
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Get(':id/welcome')
  getWelcomeMessage(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getWelcomeMessage(id);
  }
  
  */
