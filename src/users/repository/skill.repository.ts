import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SkillsEntity } from '../entities/skills.entity';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class SkillsRepository {
  constructor(
    @InjectRepository(SkillsEntity)
    private readonly skillRepository: Repository<SkillsEntity>,
  ) {}
  create(skills: string[], user: UsersEntity): SkillsEntity[] {
    const result: SkillsEntity[] = [];
    for (const it of skills) {
      result.push(this.skillRepository.create({ name: it, users: user }));
    }
    return result;
  }
  async deleteByUser(users: UsersEntity) {
    this.skillRepository.delete({ users: users });
  }
  async update(skills: SkillsEntity[]) {
    this.skillRepository.save(skills);
  }
}
