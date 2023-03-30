import { TenantEntity } from 'src/authentication/entities/tenant';

export class CreateProblemDto {
	// @Type(() => NationalDto)
	// @Expose()
	tenant: TenantEntity;
	constructor(public subject: string, public description: string) {}
}
