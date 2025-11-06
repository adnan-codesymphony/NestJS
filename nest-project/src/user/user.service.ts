import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly empService: EmployeeService) {}

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'Amit',
      },
      {
        id: 2,
        name: 'Rohit',
      },
      {
        id: 3,
        name: 'Virat',
      },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);
    return user;
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);

    if (!user) {
      return 'User not found!';
    }
    return this.empService.getHelloWithName(user?.name);
  }

  private users: User[] = [
    {
      id: 1,
      name: 'Amit',
      email: 'amit@gmail.com',
      password: 'amit',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} is not found`);
    }
    return user;
  }

  create(createUserData: Omit<User, 'id'>) {
    const newUser: User = {
      id: this.getNextId(),
      ...createUserData,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserData: Partial<Omit<User, 'id'>>) {
    const currentUserIndex = this.users.findIndex((user) => user.id === id);

    if (currentUserIndex === -1) {
      throw new NotFoundException(`User with ID ${id} is not found`);
    }

    this.users[currentUserIndex] = {
      ...this.users[currentUserIndex],
      ...updateUserData,
    };

    return this.users[currentUserIndex];
  }

  remove(id: number): { message: string } {
    const currentUserIndex = this.users.findIndex((user) => user.id === id);
    if (currentUserIndex === -1) {
      throw new NotFoundException(`User with ID ${id} is not found`);
    }
    this.users.splice(currentUserIndex, 1);

    return { message: `User with ID ${id} has been deleted` };
  }

  private getNextId(): number {
    return this.users.length + 1;
  }
}
