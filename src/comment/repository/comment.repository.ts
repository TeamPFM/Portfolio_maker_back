import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
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
      throw new InternalServerErrorException('error while create commets');
    }
  }

  async update(id: number, user: UsersEntity, body: UpdateCommentDto) {
    try {
      const result = await this.commentsRepository.update(
        { id, users: user },
        body,
      );
    } catch (error) {
      throw new InternalServerErrorException('error while update comments');
    }
  }

  async delete(id: number, user: UsersEntity) {
    try {
      const result = await this.commentsRepository.delete({ id, users: user });
    } catch (error) {
      throw new InternalServerErrorException('error while update comments');
    }
  }
}
