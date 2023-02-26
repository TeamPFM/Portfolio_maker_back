import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsRepository } from './repository/board.repository';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async createBoard(body: CreateBoardDto) {
    const createdBoard = await this.boardsRepository.create(body);
    return { status: 201, success: true };
  }

  async findPage(id: number) {
    const pagenatedBoards = await this.boardsRepository.pagenate(id);
    return pagenatedBoards;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
