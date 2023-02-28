import { IsOptional, IsString } from 'class-validator';

export class UpdateProject {
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
