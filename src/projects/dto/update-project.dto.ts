import { IsString } from 'class-validator';

export class UpdateProject {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  link: string;
  imagePath: string;
  imageName: string;
}
