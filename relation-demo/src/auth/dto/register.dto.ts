import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Fullname is required! Please Provide fullname' })
  @IsString({ message: 'Fullname must be a string' })
  @MinLength(4, { message: 'Fullname must be atleast 4 characters long' })
  @MaxLength(25, { message: 'Fullname cannot be longer than 25 characters' })
  fullname: string;

  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required! Please Provide password' })
  @MinLength(6, { message: 'Password must be atleast 6 characters long' })
  password: string;
}
