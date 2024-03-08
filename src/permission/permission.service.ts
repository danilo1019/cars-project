import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './permission.entity';
import { Repository } from 'typeorm';
import { strict } from 'assert';


@Injectable()
export class PermissionService {

    constructor(
        @InjectRepository(Permission) 
        private readonly permissionRepository: Repository<Permission>
    ) {}

    async findAll(): Promise<Permission[]> {
        return await this.permissionRepository.find()
    }

    async create(key: string, description: string): Promise<Permission> {
        const permission =  await this.permissionRepository.create({
            key,
            description
        })
        return await this.permissionRepository.save(permission)
    }
   
    async findOne(id: number) : Promise<Permission> {
        return await this.permissionRepository.findOneBy({
            id,
        })
    }

    async update(id: number, key?: string, description?: string): Promise<Permission> {
        const entity =  await this.findOne(id)
        if (!entity) {
            return null
        }
        if (key) {
            entity.key = key
        }

        if (description) {
            entity.description = description
        }
        return this.permissionRepository.save(entity)
        
    }

    async remove(permission: Permission) {
        return this.permissionRepository.remove(permission)
    }

    async 



}



