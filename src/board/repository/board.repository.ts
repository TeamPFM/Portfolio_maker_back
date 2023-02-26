import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardsEntity } from '../entities/board.entity';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly feedRepository: Repository<BoardsEntity>,
  ) {}
}
