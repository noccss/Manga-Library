import { Body, Controller, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UserService } from './users.services';

@Controller('users')
export class UserControllers {
  constructor(private userService: UserService) {}

  @Post()
  public createUser(@Body() user: User): User {
    const userCreated = this.userService.createUser(user);

    return userCreated;
  }
}
