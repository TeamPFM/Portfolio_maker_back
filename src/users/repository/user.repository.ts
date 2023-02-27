import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from '../dto/create-user.dto';
import { UsersEntity } from '../entities/users.entity';

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

  async findUserByIdWithoutPassword(
    userId: string,
  ): Promise<UsersEntity | null> {
    try {
      const id = parseInt(userId, 10);
      const user = await this.userRepository.findOne({
        select: ['id', 'email', 'name'],
        where: { id },
      });
      return user;
    } catch (error) {
      throw new NotFoundException('error while update user');
    }
  }

  async modifyUserById(body) {
    try {
      const { about, link, phone, name } = body;
      const user = await this.userRepository.update(body.user_id, {
        about,
        link,
        phone,
        name,
      });
    } catch (error) {
      throw new InternalServerErrorException('error while saving user');
    }
  }

  async updateUserImage(body) {
    try {
      const { imagePath, imageName } = body;
      const user = await this.userRepository.update(body.user_id, {
        imageName,
        imagePath,
      });
    } catch (error) {
      throw new InternalServerErrorException('error while saving user');
    }
  }

  async getInfoUser(body) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: body.user_id },
      });
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      delete user.deletedAt;
      return user;
    } catch (error) {
      throw new NotFoundException('error while update user');
    }
  }
}
