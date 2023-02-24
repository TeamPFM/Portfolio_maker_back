import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async createUser(@Body() body: CreateUsersDto) {
    const response = await this.usersService.createUser(body);
    return response;
  }

  @Post('login')
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @UseGuards(JwtAuthGuard)
  // Guards에서 인증처리된 것을 req에 넘겨준다.
  @Get('info')
  findOne(@CurrentUser() user) {
    return user;
  }
  @Post('profile-image')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'profile', maxCount: 1 }]))
  async updateProfile(
    @UploadedFiles()
    files: {
      profile?: Express.MulterS3.File[];
    },
  ) {
    return files.profile;
    // files.profile.location = 저장 위치
  }
}
