import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProject } from './dto/create-project.dto';
import { UpdateProject } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}
  @Post('')
  async createProject(@Body('project') createProject: CreateProject) {
    await this.projectService.createProject(createProject);
    return { status: 201, success: true };
  }
  @Get('')
  async getprojects(@Query('user-id', ParseIntPipe) userId: number) {
    const projects = await this.projectService.getProjects(userId);
    return { status: 200, success: true, projects };
  }
  @Delete('/:id')
  async deleteResume(@Param('id', ParseIntPipe) id: number) {
    await this.projectService.deleteProject(id);
    return { status: 200, success: true };
  }
  @Put('/:id')
  async updateResume(
    @Param('id', ParseIntPipe) id: number,
    @Body('project') updateProject: UpdateProject,
  ) {
    await this.projectService.updateProject(id, updateProject);
    return { status: 200, success: true };
  }
}
