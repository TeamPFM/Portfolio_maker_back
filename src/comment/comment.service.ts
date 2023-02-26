import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repository/comment.repository';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async createComment(user: UsersEntity, body: CreateCommentDto) {
    const createdComment = await this.commentsRepository.create(user, body);
    return { status: 201, success: true };
  }

  async update(id: number, user: UsersEntity, body: UpdateCommentDto) {
    const updatedBoard = await this.commentsRepository.update(id, user, body);
    return { status: 200, success: true };
  }

  async deleteComment(id: number, user: UsersEntity) {
    const deletedComment = await this.commentsRepository.delete(id, user);
    return { status: 200, success: true };
  }
}
