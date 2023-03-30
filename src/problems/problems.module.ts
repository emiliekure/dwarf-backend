import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './entities/problem.entity';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/authentication/entities/user';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { AuthModule } from 'src/authentication/auth.module';
import { BoardMemberEntity } from 'src/authentication/entities/boardmember';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			ProblemEntity,
			UserEntity,
			TenantEntity,
			BoardMemberEntity,
		]),
		AuthModule,
	],
	controllers: [ProblemsController],
	providers: [ProblemsService, UsersService],
})
export class ProblemsModule {}
