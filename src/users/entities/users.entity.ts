import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column } from 'typeorm';

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
}
