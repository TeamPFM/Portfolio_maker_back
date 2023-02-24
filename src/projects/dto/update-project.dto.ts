import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateProject {
  @ApiProperty({ example: 'project 이름' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'project 설명' })
  @IsString()
  description: string;
  @ApiProperty({ example: 'https://www.xxx.com' })
  @IsString()
  link: string;
}
