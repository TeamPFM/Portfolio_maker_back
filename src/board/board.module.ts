import { Module } from '@nestjs/common';
import { BoardsService } from './board.service';
import { BoardsController } from './board.controller';
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
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository, JwtAuthGuard],
})
export class BoardModule {}
