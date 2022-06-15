import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [];

  public createUser(user: User): User {
    this.users.push(user);

    return user;
  }
}
