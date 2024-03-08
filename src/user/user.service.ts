import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Entity, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(
    firstName: string,
    lastName: string,
    address: string,
    country: string,
    phone: number,
    email: string,
  ): Promise<User> {
    const user = await this.userRepository.create({
      firstName,
      lastName,
      address,
      country,
      phone,
      email,
    });
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({
      id,
    });
  }

  async update(
    id: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    country?: string,
    phone?: number,
    email?: string,
  ): Promise<User> {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }

    if (firstName) {
      entity.firstName = firstName;
    }
    if (lastName) {
      entity.lastName = lastName;
    }

    if (address) {
      entity.address = address;
    }

    if (country) {
      entity.country = country;
    }

    if (phone) {
      entity.phone = phone;
    }

    if (email) entity.email = email;

    return this.userRepository.save(entity)
  }

  async remove(user:User){
    return this.userRepository.remove(user)
  }
}
