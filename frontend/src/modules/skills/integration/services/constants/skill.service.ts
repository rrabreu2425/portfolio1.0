import { APIClientService } from '@/core/api/api-client';
import { CORE_DEPENDENCY_INJECTION_TYPES } from '@/core/dependency-injection/symbols';
import type { PaginatedSkillResponse } from '@/modules/skills/business/models/skill.model';
import type { ISkillService } from '@/modules/skills/business/services/skill.service';
import { inject, injectable } from 'inversify';

@injectable()
export class SkillService implements ISkillService{
    constructor(
        @inject(CORE_DEPENDENCY_INJECTION_TYPES.apiClient) private readonly apiClient: APIClientService
    ){}
    async getSkills(): Promise<PaginatedSkillResponse> {
        const response = await this.apiClient.get<PaginatedSkillResponse>('/skills');
        return response.data;
    }
}