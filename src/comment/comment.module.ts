import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { CommentsRepository } from './repository/comment.repository';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentsRepository, JwtAuthGuard],
})
export class CommentModule {}
