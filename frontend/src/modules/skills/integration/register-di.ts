import { coreContainer } from '@/core/dependency-injection';
import { type IGetSkills, ISkillService } from '@/modules/skills/business/services/skill.service';
import { SKILL_SYMBOLS } from '@/modules/skills/business/types/skills.symbols';
import { GetSkillsCapability } from '@/modules/skills/capabilities/get-skills.capability';
import { SkillService } from '@/modules/skills/integration/services/constants/skill.service';
import { Container } from 'inversify';


export const skillContainer = new Container({ parent: coreContainer });

skillContainer.bind<ISkillService>(SKILL_SYMBOLS.skillService).to(SkillService)
skillContainer.bind<IGetSkills>(SKILL_SYMBOLS.getSkills).to(GetSkillsCapability)