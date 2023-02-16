import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from '../dto/create-user.dto';
import { UsersEntity } from '../entities/users.entitiy';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async findUserByEmail(email: string): Promise<UsersEntity> {
    const result = await this.userRepository.findOne({ where: { email } });
    return result;
  }

  async createUserLocal(user: CreateUsersDto): Promise<UsersEntity> {
    return await this.userRepository.save(user);
  }
}
