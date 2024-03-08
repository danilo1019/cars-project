import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cars')
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Brand', nullable: false })
  brand: string;

  @Column({ name: 'Model', nullable: false })
  model: string;
  @Column({ name: 'Year', nullable: false })
  year: number;
}
