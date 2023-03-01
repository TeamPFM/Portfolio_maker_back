import { IsOptional, IsString } from 'class-validator';

export class CreateProject {
  @IsString()
  name: string;
  @IsString()
  description: string;

  @IsString()
  link: string;
  @IsOptional()
  @IsString()
  imagePath: string;
  @IsOptional()
  @IsString()
  imageName: string;
}
