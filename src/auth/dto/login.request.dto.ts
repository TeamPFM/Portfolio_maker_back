import { PickType } from '@nestjs/swagger';
import { UsersEntity } from '../../users/entities/users.entitiy';

export class LoginRequestDto extends PickType(UsersEntity, [
  'email',
  'password',
] as const) {}
