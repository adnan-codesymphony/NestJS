import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonalDetailsModule } from './personal-details/personal-details.module';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { PersonalDetails } from './personal-details/personal-details.entity';
import { Employee } from './employee/employee.entity';

@Module({
  imports: [
    UserModule,
    PersonalDetailsModule,
    EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs-relation',
      entities: [User, PersonalDetails, Employee],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
