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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateProject } from './dto/create-project.dto';
import { UpdateProject } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@ApiTags('project API')
@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @ApiOperation({
    summary: 'project 생성 API',
    description: 'project를 생성한다.',
  })
  @ApiBody({
    description: 'project를 생성한다.',
    type: CreateProject,
  })
  @ApiResponse({ status: 201, description: 'success: true' })
  @UseGuards(JwtAuthGuard)
  @Post('')
  async createProject(
    @CurrentUser() user: UsersEntity,
    @Body('project') createProject: CreateProject,
  ) {
    await this.projectService.createProject(user, createProject);
    return { status: 201, success: true };
  }

  @ApiOperation({
    summary: 'project 조회 API',
    description: 'project를 조회한다.',
  })
  @ApiResponse({
    status: 200,
    description: `
      success: true,
      projects:[{
        "id": 6,
        "createdAt": "2023-02-24T21:04:43.151Z",
        "updatedAt": "2023-02-24T21:04:43.151Z",
        "deletedAt": null,
        "name": "ㅁㄴㅇ",
        "description": "ㅁㄴㅇ",
        "link": "ㅁㄴㅇ"
      }]`,
  })
  @Get('')
  async getProjects(@Query('user-id', ParseIntPipe) userId: number) {
    const projects = await this.projectService.getProjects(userId);
    return { status: 200, success: true, projects };
  }

  @ApiOperation({
    summary: 'project 삭제 API',
    description: 'project를 삭제한다.',
  })
  @ApiResponse({ status: 200, description: 'success: true' })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteProject(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const success = await this.projectService.deleteProject(user, id);
    return { status: 200, success };
  }

  @ApiOperation({
    summary: 'project 변경 API',
    description: 'project를 변경한다.',
  })
  @ApiBody({
    description: 'project를 생성한다.',
    type: CreateProject,
  })
  @ApiResponse({ status: 200, description: 'success: true' })
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async updateProject(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body('project') updateProject: UpdateProject,
  ) {
    const success = await this.projectService.updateProject(
      user,
      id,
      updateProject,
    );
    return { status: 200, success };
  }
}
