import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalDetails } from '../personal-details/personal-details.entity';
import { Employee } from '../employee/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, PersonalDetails, Employee])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
