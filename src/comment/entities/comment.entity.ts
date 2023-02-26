import { BoardsEntity } from 'src/board/entities/board.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('comments')
export class CommentsEntity extends CommonEntity {
  @Column({ type: 'text' })
  content: string;
  @ManyToOne(() => UsersEntity, (users) => users.comments)
  users: UsersEntity;
  @ManyToOne(() => BoardsEntity, (boards) => boards.comments)
  boards: UsersEntity;
}
