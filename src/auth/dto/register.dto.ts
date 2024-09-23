import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  country: string;

  @IsString()
  prefixCountry: string;

  status: boolean;

  urlprofile?: string;
}
