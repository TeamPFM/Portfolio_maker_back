import { MaxLength } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('boards')
export class BoardsEntity extends CommonEntity {
  @MaxLength(15, { message: '게시글 이름은 최대 15글자입니다.' })
  @Column({ nullable: false })
  BoardName: string;

  @MaxLength(2000, { message: '게시글 내용의 최대 길이는 2000글자 입니다.' })
  @Column({ nullable: false })
  BoardContent: string;

  @ManyToOne(() => UsersEntity, (users) => users.boards)
  users: UsersEntity;
}
