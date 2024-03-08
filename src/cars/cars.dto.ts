import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsInt,
    IsEmail,
  } from 'class-validator';
  
  export class CreateCarDto {
    @IsNotEmpty({ message: 'Field Brand must be added' })
    @IsString()
    brand: string;
  
    @IsNotEmpty({ message: 'Field Model must be added' })
    @IsString()
    model: string;
  
    @IsNotEmpty({ message: 'Field Year must be added' })
    @IsInt()
    year: number;
  
  }
  
  export class UpdateCarDto {
      @IsNotEmpty({ message: 'Field Brand must be added' })
      @IsOptional()   
      @IsString()
      brand: string;
    
      @IsNotEmpty({ message: 'Field Model must be added' })
      @IsOptional()
      @IsString()
      model: string;
    
      @IsNotEmpty({ message: 'Field Year must be added' })
      @IsOptional()
      @IsInt()
      year: number;
    
  }
  