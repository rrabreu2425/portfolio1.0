import { APIClientService } from '@/core/api/api-client';
import { CORE_DEPENDENCY_INJECTION_TYPES } from '@/core/dependency-injection/symbols';
import type { LoginCredentials, LoginResponse, RegisterCredentials } from '@/modules/auth/business/model/auth.model';
import type { IAuthService } from '@/modules/auth/business/services/auth.service';
import { inject, injectable } from 'inversify';

@injectable()
export class AuthService implements IAuthService{
    constructor(@inject(CORE_DEPENDENCY_INJECTION_TYPES.apiClient) private apiClientService: APIClientService){}
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        const response = await this.apiClientService.post<LoginResponse>('login/', credentials);
        return response.data;
    }
    async register(credentials: RegisterCredentials): Promise<LoginResponse> {
        const response = await this.apiClientService.post<LoginResponse>('register/', credentials);
        return response.data;
    }
    async logout(): Promise<void> {
        await this.apiClientService.post('logout/');
    }
}