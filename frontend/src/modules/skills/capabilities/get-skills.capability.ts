import { ISkillService } from '@/modules/skills/business/services/skill.service';
import { SKILL_SYMBOLS } from '@/modules/skills/business/types/skills.symbols';
import { inject, injectable } from 'inversify';


@injectable()
export class GetSkillsCapability {
    constructor(
        @inject(SKILL_SYMBOLS.skillService) private readonly skillService: ISkillService
    ) {}
    async execute() {
        return this.skillService.getSkills();
    }
}
