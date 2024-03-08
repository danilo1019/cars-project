import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission/permission.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { CarsModule } from './cars/cars.module';
import { Cars } from './cars/cars.entity';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database/cars.db",
      synchronize: true,
      entities: [Permission, User, Cars]
    }), PermissionModule, UserModule, CarsModule, RolesModule],
  controllers: [AppController, CarsController, UserController],
  providers: [AppService],
})
export class AppModule {}
