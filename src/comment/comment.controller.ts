import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  createBoard(
    @CurrentUser() user: UsersEntity,
    @Body() body: CreateCommentDto,
  ): Promise<{ status: number; success: boolean }> {
    return this.commentService.createComment(user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  update(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCommentDto,
  ): Promise<{ status: number; success: boolean }> {
    return this.commentService.update(id, user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteProject(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ status: number; success: boolean }> {
    return this.commentService.deleteComment(id, user);
  }
}
