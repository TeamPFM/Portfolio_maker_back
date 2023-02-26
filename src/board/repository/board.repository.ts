import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
    try {
      const Board = {
        ...body,
        users: { id: parseInt(body.user_id) },
      };
      return this.boardsRepository.save(Board);
    } catch (error) {
      throw new InternalServerErrorException('error while create boards');
    }
  }

  async pagenate(id: number) {
    try {
      const page = 10;
      const result = await this.boardsRepository.find({
        take: page * id,
        skip: page * id,
        relations: ['users'],
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException('error while create boards');
    }
  }
}
