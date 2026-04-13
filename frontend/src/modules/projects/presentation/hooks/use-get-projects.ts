import { useDependencyInjection } from "@/core/hooks/use-dependency-injection";
import type { IGetProjects } from "@/modules/projects/business/services/projects.service";
import { PROJECT_SYMBOLS } from "@/modules/projects/business/type/projects.symbols";
import { projectContainer } from "@/modules/projects/integration/register-di";
import { useQuery } from "@tanstack/react-query";

export const useGetProjects=() => {
    const getProjectCapability: IGetProjects = useDependencyInjection(projectContainer, PROJECT_SYMBOLS.getProjects);

    return useQuery({
                queryKey: ['projects'],
                queryFn: () => getProjectCapability.execute()
            })
}