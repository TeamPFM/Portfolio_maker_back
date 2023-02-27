import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('projects')
export class ProjectsEntity extends CommonEntity {
  @Column({ type: 'varchar', name: 'project_name' })
  name: string;
  @Column({ type: 'text', name: 'desc' })
  description: string;
  @Column({ type: 'varchar', name: 'link' })
  link: string;
  @Column({ type: 'varchar', name: 'image_path' })
  imagePath: string;

  @Column({ type: 'varchar', name: 'image_name' })
  imageName: string;
  @ManyToOne(() => UsersEntity, (users) => users.projects)
  users: UsersEntity;
}
