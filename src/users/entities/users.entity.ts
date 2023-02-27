import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BoardsEntity } from 'src/board/entities/board.entity';
import { CommentsEntity } from 'src/comment/entities/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { SkillsEntity } from './skills.entity';

@Entity()
export class UsersEntity extends CommonEntity {
  @IsEmail({}, { message: '올바른 이메일을 작성해주세요.' })
  @IsNotEmpty({ message: '이메일을 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', unique: false, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar' })
  about: string;

  @Column({ type: 'varchar' })
  link: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar', name: 'image_path' })
  imagePath: string;

  @Column({ type: 'varchar', name: 'image_name' })
  imageName: string;

  @OneToMany(() => ProjectsEntity, (projects) => projects.users)
  projects: ProjectsEntity[];

  @OneToMany(() => BoardsEntity, (boards) => boards.users)
  boards: BoardsEntity[];

  @OneToMany(() => CommentsEntity, (comments) => comments.users)
  comments: CommentsEntity[];
  @OneToMany(() => SkillsEntity, (skills) => skills.users)
  skills: SkillsEntity[];
}
