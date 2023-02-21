import { PickType } from '@nestjs/swagger';
import { UsersEntity } from '../entities/users.entity';

export class CreateUsersDto extends PickType(UsersEntity, [
  'email',
  'name',
  'password',
] as const) {}
