import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entitiy';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('projects')
export class ProjectsEntity extends CommonEntity {
  @Column({ type: 'varchar', name: 'project_name' })
  name: string;
  @Column({ type: 'text', name: 'desc' })
  description: string;
  @Column({ type: 'varchar', name: 'link' })
  link: string;
  @ManyToOne(() => UsersEntity, (users) => users.projects)
  users: UsersEntity;
}
