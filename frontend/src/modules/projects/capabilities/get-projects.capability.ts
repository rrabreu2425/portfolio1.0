import type { IProjectService } from '@/modules/projects/business/services/projects.service';
import { PROJECT_SYMBOLS } from '@/modules/projects/business/type/projects.symbols';
import { inject, injectable } from 'inversify';

@injectable()
export class GetProjectsCapability {
    constructor(
        @inject(PROJECT_SYMBOLS.projectService) private readonly projectService: IProjectService
    ) {}
    async execute() {
        return this.projectService.getProjects();
    }
}