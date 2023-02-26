import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsEntity } from './entities/board.entity';
import { BoardsRepository } from './repository/board.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardsEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [BoardController],
  providers: [BoardService, BoardsRepository, JwtAuthGuard],
})
export class BoardModule {}
