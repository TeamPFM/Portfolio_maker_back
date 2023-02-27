import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './repository/projects.repository';
import { CreateProject } from './dto/create-project.dto';
import { ProjectsEntity } from './entities/projects.entity';
import { UpdateProject } from './dto/update-project.dto';
import { UsersEntity } from 'src/users/entities/users.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}
  async createProject(
    user: UsersEntity,
    createProject: CreateProject,
    file: Express.Multer.File,
  ): Promise<void> {
    const projects: ProjectsEntity =
      this.projectsRepository.create(createProject);
    projects.users = user;
    projects.imageName = file?.filename;
    projects.imagePath = file?.path;
    await this.projectsRepository.save(projects);
  }
  async getProjects(userId: number): Promise<ProjectsEntity[]> {
    return this.projectsRepository.findProjectsByUserId(userId);
  }
  async deleteProject(user: UsersEntity, id: number): Promise<boolean> {
    const result: number = await this.projectsRepository.deleteProjectsById(
      user,
      id,
    );
    return result != 0;
  }
  async updateProject(
    user: UsersEntity,
    id: number,
    updateProject: UpdateProject,
  ): Promise<boolean> {
    const result: number = await this.projectsRepository.updateProjectById(
      user,
      id,
      updateProject,
    );
    return result != 0;
  }
}
