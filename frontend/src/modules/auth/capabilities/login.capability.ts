import type { LoginCredentials } from '@/modules/auth/business/model/auth.model';
import type { IAuthService, ILogin } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { inject, injectable } from 'inversify';

@injectable()
export class LoginCapability implements ILogin {
constructor(@inject(AUTH_SYMBOLS.AuthService) private authService: IAuthService){}

async execute(credentials: LoginCredentials) {
    return this.authService.login(credentials);
}
}