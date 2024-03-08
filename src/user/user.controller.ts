import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './userDto';
import { promises } from 'dns';
import { NotEquals } from 'class-validator';
import { NotFoundError } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(
      body.firstName,
      body.lastName,
      body.address,
      body.country,
      body.phone,
      body.email,
    );
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    const updatedUser = await this.userService.update(
      id,
      body.firstName,
      body.lastName,
      body.address,
      body.country,
      body.phone,
      body.email,
    );
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const entity = await this.userService.findOne(id);
    if (!entity) {
      throw new NotFoundException(`User not found`);
    }
    this.userService.remove(entity);
  }
}
