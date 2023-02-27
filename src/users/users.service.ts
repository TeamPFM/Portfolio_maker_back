import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';
import { SkillsRepository } from './repository/skill.repository';
import { SkillsEntity } from './entities/skills.entity';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly skillsRepository: SkillsRepository,
  ) {}

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
    const skills: string[] = body.skill.split(',');
    const user: UsersEntity = await this.getInfo(body);
    await this.skillsRepository.deleteByUser(user);
    const skillsEntity: SkillsEntity[] = this.skillsRepository.create(
      skills,
      user,
    );
    await this.skillsRepository.update(skillsEntity);

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

  async remove(id: number) {
    const deleteUser = await this.usersRepository.remove(id);
    return { status: 200, success: true };
  }
}
