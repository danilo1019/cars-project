import { IsString, IsNotEmpty, IsOptional } from "class-validator"

export class CreatePermissionDto {
    @IsNotEmpty({message: 'Field key must be added'})
    @IsString()
    key: string

    @IsNotEmpty({message: 'Field description must be added'})
    @IsString()
    description: string
}

export class UpdatePermissionDto {
    @IsOptional()
    @IsNotEmpty({message: 'Field key must be added'})
    @IsString()
    key?: string

    @IsOptional()
    @IsNotEmpty({message: 'Field description must be added'})
    @IsString()
    description?: string
}

