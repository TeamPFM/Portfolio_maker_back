import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './repository/projects.repository';
import { CreateProject } from './dto/create-project.dto';
import { ProjectsEntity } from './entities/projects.entity';
import { UpdateProject } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}
  async createProject(createProject: CreateProject): Promise<void> {
    const projects: ProjectsEntity =
      this.projectsRepository.create(createProject);
    await this.projectsRepository.save(projects);
  }
  async getProjects(userId: number): Promise<ProjectsEntity[]> {
    return this.projectsRepository.findProjectsByUserId(userId);
  }
  async deleteProject(id: number): Promise<void> {
    await this.projectsRepository.deleteProjectsById(id);
  }
  async updateProject(id: number, updateProject: UpdateProject): Promise<void> {
    await this.projectsRepository.updateProjectById(id, updateProject);
  }
}
