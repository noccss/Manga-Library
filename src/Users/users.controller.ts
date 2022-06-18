import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UserService } from './users.services';

@Controller('users')
export class UserControllers {
  constructor(private userService: UserService) {}

  @Get(':id')
  public getOneUser(@Param('id') id: string): User {
    const userFounded = this.userService.getOneUser(id);

    return userFounded;
  }

  @Get()
  public getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  public createUser(@Body() user: User): User {
    const userCreated = this.userService.createUser(user);

    return userCreated;
  }
}
