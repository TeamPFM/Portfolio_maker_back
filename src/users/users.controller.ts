import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { ReqWithUserId } from 'src/common/decorators/req_user_id.decorator';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { multerOptions } from 'src/common/utils/multer.options';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('')
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
  findOne(@ReqWithUserId() body) {
    return this.usersService.getInfo(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  modify(@ReqWithUserId() body) {
    return this.usersService.modify(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('img')
  @UseInterceptors(FileInterceptor('img', multerOptions('')))
  uploadImg(@UploadedFile() img: Express.Multer.File) {
    return { url: img.filename };
  }

  @UseGuards(JwtAuthGuard)
  @Post('img/update')
  update(@ReqWithUserId() body) {
    return this.usersService.updateUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  deleteUser(@CurrentUser() user: UsersEntity) {
    return this.usersService.remove(user.id);
  }
}
