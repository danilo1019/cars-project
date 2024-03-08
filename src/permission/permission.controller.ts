import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  NotFoundException,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { Permission } from './permission.entity';
import { CreatePermissionDto, UpdatePermissionDto } from './permission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  findAll(): Promise<Permission[]> {
    return this.permissionService.findAll();
  }

  @Post()
  create(@Body() body: CreatePermissionDto): Promise<Permission> {
    return this.permissionService.create(body.key, body.description);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Permission> {
    return this.permissionService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const entity = await this.permissionService.findOne(id);
    if (!entity) {
      throw new NotFoundException('Permission Not Found');
    }
    this.permissionService.remove(entity);
  }

  @Put(':id') // Works as put and patch
  async update(@Param('id') id: number, @Body() body: UpdatePermissionDto) {
    const updatedPermission = await this.permissionService.update(
      id,
      body.key,
      body.description,
    );
    if (!updatedPermission) {
      throw new NotFoundException(`Permission with id ${id} not found`);
    }
    return updatedPermission;
  }
}
