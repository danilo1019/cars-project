import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        name : 'First Name', 
        nullable : false})
        firstName: string

    @Column({
        name : 'Last Name', 
        nullable : false})
        lastName: string

    @Column({
        name : 'Address', 
        nullable : false})
        address: string

    @Column({
        name : 'Country', 
        nullable : false})
        country: string
            
            
    @Column({
        name : 'Phone', 
        nullable : false})
        phone: number

    @Column ({
        name : 'email',
        nullable : false,})
        email : string

    
}