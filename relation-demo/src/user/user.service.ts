import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { UserInterface } from './interface/UserInterface';
import { PersonalDetails } from '../personal-details/personal-details.entity';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  findAll() {
    return this.userRepository.find({
      relations: ['personalDetails', 'employees'],
    });
  }

  async createUser(userDetails: UserInterface) {
    return this.dataSource.transaction(async (manager: EntityManager) => {
      const savedUser = await manager.save(User, {
        fullname: userDetails.fullname,
        email: userDetails.email,
        password: userDetails.password,
      });

      await manager.save(PersonalDetails, {
        gender: userDetails.gender,
        age: userDetails.age,
        address: userDetails.address,
        user: savedUser,
      });

      await manager.save(Employee, {
        designation: userDetails.designation,
        department: userDetails.department,
        salary: userDetails.salary,
        user: savedUser,
      });
    });
  }
}
