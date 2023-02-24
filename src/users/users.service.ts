import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(body: CreateUsersDto) {
    const { email, name, password } = body;
    const newUser = await this.usersRepository.findUserByEmail(email);
    if (newUser) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      await this.usersRepository.createUserLocal({
        email,
        name,
        password: hashPassword,
      });
      return { status: 201, success: true };
    }
  }

  async modify(body) {
    const modifiedUser = await this.usersRepository.modifyUserById(body);
    return { status: 200, success: true };
  }

  async updateUser(body) {
    const updatedUser = await this.usersRepository.updateUserImage(body);
    return { status: 200, success: true };
  }

  async getInfo(body) {
    const infoUser = await this.usersRepository.getInfoUser(body);
    return infoUser;
  }
}
