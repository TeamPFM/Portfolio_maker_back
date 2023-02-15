import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsEmail()
  @IsNotEmpty({ message: '이메일은 비워져 있을 수 없습니다.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '이은 비워져 있을 수 없습니다.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호는 비워져 있을 수 없습니다.' })
  password: string;
}
