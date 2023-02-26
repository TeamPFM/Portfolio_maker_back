import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersEntity } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsEntity } from './projects/entities/projects.entity';
import { CommentModule } from './comment/comment.module';
import { BoardsEntity } from './board/entities/board.entity';
import { CommentsEntity } from './comment/entities/comment.entity';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [UsersEntity, ProjectsEntity, BoardsEntity, CommentsEntity],
      synchronize: true,
    }),
    UsersModule,
    ProjectsModule,
    CommentModule,
    BoardModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
