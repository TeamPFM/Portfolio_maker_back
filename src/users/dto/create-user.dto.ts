import { PickType } from '@nestjs/swagger';
import { UsersEntity } from '../entities/users.entitiy';

export class CreateUsersDto extends PickType(UsersEntity, [
  'email',
  'name',
  'password',
] as const) {}
