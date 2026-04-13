import type { PaginatedProjectResponse } from '@/modules/projects/business/models/project.model';

export interface IGetProjects {
    execute(): Promise<PaginatedProjectResponse>;
}
export abstract class IProjectService {
    abstract getProjects(): Promise<PaginatedProjectResponse>;
}