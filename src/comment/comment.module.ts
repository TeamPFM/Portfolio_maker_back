import { Module } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CommentsController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { CommentsRepository } from './repository/comment.repository';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CommentsEntity } from './entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository, JwtAuthGuard],
})
export class CommentModule {}
