import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './users.service';
import { UsersRepository } from './repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { SkillsEntity } from './entities/skills.entity';
import { SkillsRepository } from './repository/skill.repository';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    TypeOrmModule.forFeature([UsersEntity, SkillsEntity]),
    forwardRef(() => AuthModule),
    JwtModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, SkillsRepository],
  exports: [UsersRepository],
})
export class UsersModule {}
