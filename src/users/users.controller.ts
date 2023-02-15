import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUsersDto) {
    await this.usersService.createUser(body);
    return { status: 201, success: true };
  }
}
