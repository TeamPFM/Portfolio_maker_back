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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { multerOptions } from 'src/common/utils/multer.options';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateProject } from './dto/create-project.dto';
import { UpdateProject } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  @UseInterceptors(FileInterceptor('file', multerOptions('')))
  async createProject(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: UsersEntity,
    @Body('') createProject: CreateProject,
  ) {
    await this.projectService.createProject(user, createProject, file);
    return { status: 201, success: true };
  }

  @Get('')
  async getProjects(@Query('user-id', ParseIntPipe) userId: number) {
    const projects = await this.projectService.getProjects(userId);
    return { status: 200, success: true, projects };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteProject(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const success = await this.projectService.deleteProject(user, id);
    return { status: 200, success };
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @UseInterceptors(FileInterceptor('file', multerOptions('')))
  async updateProject(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body('') updateProject: UpdateProject,
  ) {
    const success = await this.projectService.updateProject(
      user,
      id,
      updateProject,
      file,
    );
    return { status: 200, success };
  }
}
