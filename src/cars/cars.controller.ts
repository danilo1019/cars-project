import { Body, Controller, Get, Post, Patch, Delete, Put, Param } from '@nestjs/common';
import { stat } from 'fs';

@Controller('cars')
export class CarsController {

    @Get()
    findAll() : string {
        return 'Return all cars'
    }

    @Get(':id') // cars/1
    getCar(@Param('id') id : string) : string {
        return `Your car id is ${id}`;
    }

    @Post()
    createCar(@Body('brand') brand : string) : string {
        return `Brand car is ${brand}` ;
    }

    @Put(':id')
    changeCar(@Body('brand') brand : string, @Param('id')id : string) : string  {
        return `New brand is ${brand} id: ${id}`
    }

    @Patch(':id')
    updateCar(@Param('id') id : string, @Body('solded') solded : Boolean ){
        return `The car ${id} has been SOLDED? ${solded}`;
    }

    @Delete(':id')
    deleteCar(@Param('id') id : string, @Body('status') status: string){
        return `The car ${id} has been deleted, because it was ${status}`;
    }


}
