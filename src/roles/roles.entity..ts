import { Permission } from 'src/permission/permission.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @ManyToMany(() => Permission, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'roles_x_permissions',
    joinColumn: {
      name: 'id_roles',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_permissions',
      referencedColumnName: 'id',
    },
  })
  permissions?: Permission[];
}
