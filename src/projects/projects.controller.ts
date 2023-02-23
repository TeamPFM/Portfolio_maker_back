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
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateProject } from './dto/create-project.dto';
import { UpdateProject } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createProject(
    @CurrentUser() user: UsersEntity,
    @Body('project') createProject: CreateProject,
  ) {
    await this.projectService.createProject(createProject);
    return { status: 201, success: true };
  }
  @Get('')
  async getProjects(@Query('user-id', ParseIntPipe) userId: number) {
    const projects = await this.projectService.getProjects(userId);
    return { status: 200, success: true, projects };
  }
  @Delete('/:id')
  async deleteProject(@Param('id', ParseIntPipe) id: number) {
    await this.projectService.deleteProject(id);
    return { status: 200, success: true };
  }
  @Put('/:id')
  async updateProject(
    @Param('id', ParseIntPipe) id: number,
    @Body('project') updateProject: UpdateProject,
  ) {
    await this.projectService.updateProject(id, updateProject);
    return { status: 200, success: true };
  }
}
