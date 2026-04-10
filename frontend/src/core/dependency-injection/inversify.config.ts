import 'reflect-metadata';

import { Container } from 'inversify';



import { APIClientService } from '@/core/api/api-client';
import { CORE_DEPENDENCY_INJECTION_TYPES } from './symbols';

const coreContainer = new Container();

// Register services
coreContainer
    .bind<APIClientService>(CORE_DEPENDENCY_INJECTION_TYPES.apiClient)
    .to(APIClientService)
    .inSingletonScope();

export { coreContainer };
