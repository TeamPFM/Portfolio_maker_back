import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class UsersEntity extends CommonEntity {
  @ApiProperty({ example: 'example@gmail.com' })
  @IsEmail({}, { message: '올바른 이메일을 작성해주세요.' })
  @IsNotEmpty({ message: '이메일을 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  email: string;

  @ApiProperty({ example: 'name_is_string' })
  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', unique: false, nullable: false })
  name: string;

  @ApiProperty({ example: 'password_is_string' })
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ApiProperty({ example: 'about_is_string' })
  @Column({ type: 'varchar' })
  about: string;

  @ApiProperty({ example: 'https://www.xxx.com' })
  @Column({ type: 'varchar' })
  link: string;

  @ApiProperty({ example: '010-xxxx-xxxx' })
  @Column({ type: 'varchar' })
  phone: string;

  @ApiProperty({ example: 'https://www.xxx.com' })
  @Column({ type: 'varchar', name: 'image_path' })
  imagePath: string;

  @ApiProperty({ example: 'image_name_is_string' })
  @Column({ type: 'varchar', name: 'image_name' })
  imageName: string;

  @OneToMany(() => ProjectsEntity, (projects) => projects.users)
  projects: ProjectsEntity[];
}
