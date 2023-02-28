import { CommentsEntity } from 'src/comment/entities/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('boards')
export class BoardsEntity extends CommonEntity {
  @Column({ type: 'varchar', name: 'boards_name' })
  title: string;
  @Column({ type: 'text' })
  content: string;
  @ManyToOne(() => UsersEntity, (users) => users.boards)
  users: UsersEntity;
  @OneToMany(() => CommentsEntity, (comments) => comments.boards)
  comments: CommentsEntity[];
}
