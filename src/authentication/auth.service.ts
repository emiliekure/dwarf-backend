import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SuperAdminGuard } from './super-admin.guard';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async signup_tenant(user: any) {
		return this.usersService.create_tenant(
			user.username,
			user.password,
			user.firstname,
			user.lastname,
			user.birthday,
		);
	}

	async signup_boardmember(user: any) {
		return this.usersService.create_boardmember(
			user.username,
			user.password,
			user.role,
			user.phone,
		);
	}

	async signup(user: any) {
		return this.usersService.create(user.username, user.password);
	}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.findOne(username);
		console.log('user found', user);

		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = {
			username: user.username,
			id: user.id,
			tenantId: user.tenant.id,
		};
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
