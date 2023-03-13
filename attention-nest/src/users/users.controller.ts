import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {}

  @Post('signup')
  signup(@Body() body) {}

  @Post('signin')
  login(@Body() body) {}
}
