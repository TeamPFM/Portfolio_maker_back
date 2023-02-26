import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
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

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
