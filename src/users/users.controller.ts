import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log('dto -> ', dto);

    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  // @Post('/email-verify')
  // async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
  //   const { signupVerifyToken } = dto;

  //   return await this.usersService.verifyEmail(signupVerifyToken);
  // }

  // @Post('/login')
  // async login(@Body() dto: UserLoginDto): Promise<string> {
  //   const { email, password } = dto;

  //   return await this.usersService.login(email, password);
  // }

  // @Get('/:id')
  // async getUserInfo(@Param('id') userId: string): Promise<string> {
  //   return await this.usersService.getUserInfo(userId);
  // }
}
