import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentsEntity } from '../entities/comment.entity';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
  ) {}

  async create(user: UsersEntity, body: CreateCommentDto) {
    try {
      const Comment = {
        ...body,
        users: { id: user.id },
        boards: { id: parseInt(body.boardId) },
      };
      return this.commentsRepository.save(Comment);
    } catch (error) {
      throw new InternalServerErrorException('error while create boards');
    }
  }
}
