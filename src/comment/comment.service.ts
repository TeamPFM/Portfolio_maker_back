import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repository/comment.repository';

@Injectable()
export class CommentsService {
  constructor(private readonly commentssRepository: CommentsRepository) {}

  async createComment(user: UsersEntity, body: CreateCommentDto) {
    const createdComment = await this.commentssRepository.create(user, body);
    return { status: 201, success: true };
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
