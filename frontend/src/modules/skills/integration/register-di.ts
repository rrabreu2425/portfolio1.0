import { coreContainer } from '@/core/dependency-injection';
import { SKILL_SYMBOLS } from '@/modules/skills/business/types/skills.symbols';
import { SkillService } from '@/modules/skills/integration/services/constants/skill.service';
import { Container } from 'inversify';


export const skillContainer = new Container({ parent: coreContainer });

skillContainer.bind<SkillService>(SKILL_SYMBOLS.skillService).to(SkillService).inSingletonScope();