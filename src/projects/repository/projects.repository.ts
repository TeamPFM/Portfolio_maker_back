import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProject } from '../dto/create-project.dto';
import { UpdateProject } from '../dto/update-project.dto';
import { ProjectsEntity } from '../entities/projects.entity';

@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectRepository(ProjectsEntity)
    private readonly projectsRepository: Repository<ProjectsEntity>,
  ) {}
  create(createProject: CreateProject): ProjectsEntity {
    return this.projectsRepository.create(createProject);
  }
  async save(Projects: ProjectsEntity): Promise<void> {
    await this.projectsRepository.save(Projects);
  }
  async findProjectsByUserId(userId: number): Promise<ProjectsEntity[]> {
    return await this.projectsRepository.find({
      where: {
        users: {
          id: userId,
        },
      },
    });
  }
  async deleteProjectsById(user: UsersEntity, id: number): Promise<number> {
    const result: DeleteResult = await this.projectsRepository.delete({
      id,
      users: user,
    });
    return result.affected;
  }
  async updateProjectById(
    user: UsersEntity,
    id: number,
    updateProject: UpdateProject,
  ): Promise<number> {
    const result: UpdateResult = await this.projectsRepository.update(
      { id, users: user },
      updateProject,
    );
    return result.affected;
  }
}
