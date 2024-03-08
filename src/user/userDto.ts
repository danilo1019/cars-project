import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Field First Name must be added' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Field Last Name must be added' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Field Address must be added' })
  @IsString()
  address: string;

  @IsNotEmpty({ message: 'Field Country must be added' })
  @IsString()
  country: string;

  @IsNotEmpty({ message: 'Field Phone must be added' })
  @IsInt()
  phone: number;

  @IsNotEmpty({ message: 'Field Email must be added' })
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
    @IsNotEmpty({ message: 'Field First Name must be added' })
    @IsOptional()   
    @IsString()
    firstName: string;
  
    @IsNotEmpty({ message: 'Field Last Name must be added' })
    @IsOptional()
    @IsString()
    lastName: string;
  
    @IsNotEmpty({ message: 'Field Address must be added' })
    @IsOptional()
    @IsString()
    address: string;
  
    @IsNotEmpty({ message: 'Field Country must be added' })
    @IsOptional()
    @IsString()
    country: string;
  
    @IsNotEmpty({ message: 'Field Phone must be added' })
    @IsOptional()
    @IsInt()
    phone: number;
  
    @IsNotEmpty({ message: 'Field Email must be added' })
    @IsOptional()
    @IsEmail()
    email: string;
}
