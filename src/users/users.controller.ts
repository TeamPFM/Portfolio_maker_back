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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
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

  @ApiOperation({
    summary: '회원가입',
    description: 'email, nick, password 필요',
  })
  @ApiResponse({ status: 201, description: 'success: true' })
  @Post()
  async createUser(@Body() body: CreateUsersDto) {
    const response = await this.usersService.createUser(body);
    return response;
  }

  @ApiOperation({
    summary: '로그인',
    description: 'email, password 필요',
  })
  @ApiResponse({ status: 200, description: 'success: true' })
  @Post('login')
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({
    summary: '정보 가져오기',
    description: 'header에 Authorization Bearer 설정 필요',
  })
  @ApiResponse({ status: 200, description: 'success: true' })
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
