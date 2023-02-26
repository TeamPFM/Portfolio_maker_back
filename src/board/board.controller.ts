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
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { ReqWithUserId } from 'src/common/decorators/req_user_id.decorator';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsEntity } from './entities/board.entity';

@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  createBoard(@ReqWithUserId() body: CreateBoardDto) {
    return this.boardService.createBoard(body);
  }

  @Get('')
  findPage(@Query('id') id: string): Promise<BoardsEntity[]> {
    return this.boardService.findPage(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
