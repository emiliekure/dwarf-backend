import { ProblemEntity } from 'src/problems/entities/problem.entity';
import { Role } from 'src/users/Role';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { UserEntity } from './user';

@Entity()
export class TenantEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => UserEntity)
	@JoinColumn()
	user: UserEntity;

	@Column()
	firstname: string;

	@Column()
	lastname: string;

	@Column()
	birthday: Date;

	@OneToMany(() => ProblemEntity, (problem) => problem.tenant)
	problem: ProblemEntity[];
}
