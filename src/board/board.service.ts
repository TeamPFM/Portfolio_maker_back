import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsRepository } from './repository/board.repository';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async createBoard(user: UsersEntity, body: CreateBoardDto) {
    const createdBoard = await this.boardsRepository.create(user, body);
    return { status: 201, success: true };
  }

  async findPage(id: number) {
    const pagenatedBoards = await this.boardsRepository.pagenate(id);
    return pagenatedBoards;
  }
  async update(id: number, user: UsersEntity, body: UpdateBoardDto) {
    const updatedBoard = await this.boardsRepository.update(id, user, body);
    return { status: 201, success: true };
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
