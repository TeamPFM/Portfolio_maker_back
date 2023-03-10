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
      const result: any = await this.boardsRepository.find({
        take: 10,
        skip: page * id,
        order: { id: 'DESC' },
        relations: ['users'],
      });
      const newResult = result.map((board: any) => {
        const { users, ...boardData } = board;
        const { password, ...userData } = users;
        return {
          ...boardData,
          users: userData,
        };
      });
      return newResult;
    } catch (error) {
      throw new NotFoundException('error while find boards');
    }
  }

  async findPage(id: number) {
    try {
      const result: any = await this.boardsRepository.findOne({
        where: {
          id: id,
        },
        join: {
          alias: 'boards',
          leftJoinAndSelect: {
            comments: 'boards.comments',
            users: 'comments.users',
          },
        },
        relations: ['users'],
      });
      // Delete users.password
      const { users, ...boardData } = result;
      const { password, ...usersData } = users;
      const newUserResult = {
        ...boardData,
        users: usersData,
      };
      // Delete comments.users.password
      const newCommentResult = {
        ...newUserResult,
        comments: newUserResult.comments.map((comment: any) => {
          const { users, ...commentData } = comment;
          const { password, ...usersData } = users;
          return {
            ...commentData,
            users: usersData,
          };
        }),
      };
      return newCommentResult;
      return newUserResult;
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
