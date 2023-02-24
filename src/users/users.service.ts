import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  private s3: AWS.S3;
  private bucket: string;
  constructor(
    private readonly usersRepository: UsersRepository,
    private configService: ConfigService,
  ) {
    this.bucket = configService.get('AWS_BUCKET_NAME');
    this.s3 = new AWS.S3({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
      region: configService.get('AWS_BUCKET_REGION'),
    });
  }

  async createUser(body: CreateUsersDto) {
    const { email, name, password } = body;
    const newUser = await this.usersRepository.findUserByEmail(email);
    if (newUser) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      await this.usersRepository.createUserLocal({
        email,
        name,
        password: hashPassword,
      });
      return { status: 201, success: true };
    }
  }
  async deleteFile(users: UsersEntity) {
    await this.s3
      .deleteObjects({
        Bucket: this.bucket,
        Delete: {
          Objects: [{ Key: users.imagePath }],
          Quiet: false,
        },
      })
      .promise();
  }
}
