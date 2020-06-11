import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    try {
      const newUserId = await this.userService.insertUser(
        firstname,
        lastname,
        email,
        password
      );

      return { id: newUserId };
    } catch (err) {
      console.warn(err);
    }
  }
}
