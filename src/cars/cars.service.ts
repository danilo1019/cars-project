import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from './cars.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carRepository: Repository<Cars>,
  ) {}

  async findAll(): Promise<Cars[]> {
    return await this.carRepository.find();
  }

  async create(brand: string, model: string, year: number): Promise<Cars> {
    const car = await this.carRepository.create({
      brand,
      model,
      year,
    });
    return await this.carRepository.save(car);
  }

  async findOne(id: number): Promise<Cars> {
    return await this.carRepository.findOneBy({
      id,
    });
  }

  async update(
    id: number,
    brand?: string,
    model?: string,
    year?: number,
  ): Promise<Cars> {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }

    if (brand) {
      entity.brand = brand;
    }
    if (model) {
      entity.model = model;
    }

    if (year) {
      entity.year = year;
    }

    return this.carRepository.save(entity)
  }
}
