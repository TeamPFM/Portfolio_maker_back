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

  async findIntoPage(id: number) {
    const boardPage = await this.boardsRepository.findPage(id);
    return boardPage;
  }

  async update(id: number, user: UsersEntity, body: UpdateBoardDto) {
    const updatedBoard = await this.boardsRepository.update(id, user, body);
    return { status: 200, success: true };
  }

  async deleteBoard(id: number, user: UsersEntity) {
    const deletedBox = await this.boardsRepository.delete(id, user);
    return { status: 200, success: true };
  }
}
