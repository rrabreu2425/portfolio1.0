import { useDependencyInjection } from '@/core/hooks/use-dependency-injection';
import type { IGetSkills } from '@/modules/skills/business/services/skill.service';
import { SKILL_SYMBOLS } from '@/modules/skills/business/types/skills.symbols';
import { skillContainer } from '@/modules/skills/integration/register-di';
import { useQuery } from '@tanstack/react-query';

export const useGetSkills = () => {
    const getSkillsCapability: IGetSkills = useDependencyInjection(skillContainer, SKILL_SYMBOLS.getSkills);

    return useQuery({
        queryKey: ['skills'],
        queryFn: () => getSkillsCapability.execute()
    })
};