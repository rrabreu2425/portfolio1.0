import { coreContainer } from '@/core/dependency-injection';
import { type IGetProjects, IProjectService } from '@/modules/projects/business/services/projects.service';
import { PROJECT_SYMBOLS } from '@/modules/projects/business/type/projects.symbols';
import { GetProjectsCapability } from '@/modules/projects/capabilities/get-projects.capability';
import { ProjectService } from '@/modules/projects/integration/services/projects.service';
import { Container } from 'inversify';

export const projectContainer = new Container({ parent: coreContainer });

projectContainer.bind<IProjectService>(PROJECT_SYMBOLS.projectService).to(ProjectService);
projectContainer.bind<IGetProjects>(PROJECT_SYMBOLS.getProjects).to(GetProjectsCapability)

