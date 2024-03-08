//typeorm model
import { Role } from 'src/roles/roles.entity.';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'key', nullable: false })
  key: string;

  @Column({ name: 'description', nullable: false })
  description: string;

//   @ManyToMany(() => Role, (role) => role.permissions, {
//     onDelete: 'NO ACTION',
//     onUpdate: 'NO ACTION',
//   })
//   roles?: Role;
}
