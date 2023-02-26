import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardsEntity } from '../entities/board.entity';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
  ) {}

  async create(body: CreateBoardDto) {
    const Board = {
      ...body,
      users: { id: parseInt(body.user_id) },
    };
    return this.boardsRepository.save(Board);
  }

  async pagenate(id: number) {
    const page = 10;
    const result = await this.boardsRepository.find({
      take: page * id,
      skip: page * id,
      relations: ['users'],
    });
    return result;
  }
}
