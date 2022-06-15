import { Module } from '@nestjs/common';
import { UserControllers } from './users.controller';
import { UserService } from './users.services';

@Module({
  controllers: [UserControllers],
  providers: [UserService],
})
export class UserModule {}
