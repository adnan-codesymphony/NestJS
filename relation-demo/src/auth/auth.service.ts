import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException(
        'Email already in use! Please try with a diff email',
      );
    }

    const hashedPassword = await this.hashPassword(registerDto.password);

    const newlyCreatedUser = this.userRepository.create({
      fullname: registerDto.fullname,
      email: registerDto.email,
      password: hashedPassword,
    });

    const saveUser = await this.userRepository.save(newlyCreatedUser);

    const { password, ...result } = saveUser;
    console.log(password);
    return {
      user: result,
      message: 'Registration Successful!',
    };
  }

  async login(loginDto: LoginDto) {
    const currentUser = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (
      !currentUser ||
      !(await this.verifyPassword(loginDto.password, currentUser.password))
    ) {
      throw new UnauthorizedException(
        'Invalid Credentials or Account not exists',
      );
    }

    const payload = {
      sub: currentUser.id,
      email: currentUser.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private async verifyPassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
