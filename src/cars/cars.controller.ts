import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsModule } from './cars.module';
import { Cars } from './cars.entity';
import { CreateCarDto, UpdateCarDto } from './cars.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}
  @Get()
  findAll(): Promise<Cars[]> {
    return this.CarsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Cars> {
    return this.CarsService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCarDto): Promise<Cars> {
    return this.CarsService.create(body.brand, body.model, body.year);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateCarDto) {
    const updatedCar = await this.CarsService.update(
      id,
      body.brand,
      body.model,
      body.year,
    );
    if (!updatedCar) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return updatedCar;
  }
}
