import { inject, injectable } from 'inversify';
import {APIClientService} from '@/core/api/api-client';
import {CORE_DEPENDENCY_INJECTION_TYPES} from '@/core/dependency-injection/symbols';
import {IProjectService} from '@/modules/projects/business/services/projects.service';
import type { PaginatedProjectResponse } from '@/modules/projects/business/models/project.model';

@injectable()
export class ProjectService implements IProjectService {
     constructor(
        @inject(CORE_DEPENDENCY_INJECTION_TYPES.apiClient) private readonly apiClient: APIClientService
    ){}

    async getProjects(): Promise<PaginatedProjectResponse> {
        const response = await this.apiClient.get<PaginatedProjectResponse>('projects/');
        return response.data;
    }
}