import type { PaginatedSkillResponse } from '@/modules/skills/business/models/skill.model';

export interface IGetSkills {
    execute(): Promise<PaginatedSkillResponse>;
}

export abstract class ISkillService {
   abstract getSkills(): Promise<PaginatedSkillResponse>;
}