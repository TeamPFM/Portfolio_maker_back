import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UsersEntity } from 'src/users/entities/users.entity';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsEntity } from './entities/board.entity';

@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  createBoard(
    @CurrentUser() user: UsersEntity,
    @Body() body: CreateBoardDto,
  ): Promise<{ status: number; success: boolean }> {
    return this.boardService.createBoard(user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findPage(@Query('id', ParseIntPipe) id: number): Promise<BoardsEntity[]> {
    return this.boardService.findPage(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findIntoPage(@Param('id', ParseIntPipe) id: number): Promise<BoardsEntity> {
    return this.boardService.findIntoPage(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  update(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateBoardDto,
  ): Promise<{ status: number; success: boolean }> {
    return this.boardService.update(id, user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteProject(
    @CurrentUser() user: UsersEntity,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ status: number; success: boolean }> {
    return this.boardService.deleteBoard(id, user);
  }
}
