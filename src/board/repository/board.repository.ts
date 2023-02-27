import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import { BoardsEntity } from '../entities/board.entity';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
  ) {}

  async create(user: UsersEntity, body: CreateBoardDto) {
    try {
      const Board = {
        ...body,
        users: { id: user.id },
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
        order: { id: 'DESC' },
        relations: ['users'],
      });
      return result;
    } catch (error) {
      throw new NotFoundException('error while find boards');
    }
  }

  async findPage(id: number) {
    try {
      const result = await this.boardsRepository.findOne({
        where: {
          id: id,
        },
        relations: ['comments'],
      });
      return result;
    } catch (error) {
      throw new NotFoundException('error while find boards');
    }
  }

  async update(id: number, user: UsersEntity, body: UpdateBoardDto) {
    try {
      const result = await this.boardsRepository.update(
        { id, users: user },
        body,
      );
    } catch (error) {
      throw new InternalServerErrorException('error while update boards');
    }
  }

  async delete(id: number, user: UsersEntity) {
    try {
      const result = await this.boardsRepository.delete({ id, users: user });
      return result.affected;
    } catch (error) {
      throw new InternalServerErrorException('error while delete boards');
    }
  }
}
