import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      relations: ['users'],
      where: {
        id: userId,
      },
    });
  }
  async deleteProjectsById(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
  async updateProjectById(
    id: number,
    updateProject: UpdateProject,
  ): Promise<void> {
    await this.projectsRepository.update(id, updateProject);
  }
}
