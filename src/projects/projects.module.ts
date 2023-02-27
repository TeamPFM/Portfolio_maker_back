import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/projects.entity';
import { ProjectsRepository } from './repository/projects.repository';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectsEntity]),
    MulterModule.register({ dest: './uploads' }),
  ],
  providers: [ProjectsService, ProjectsRepository],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
