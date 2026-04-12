import type { IAuthService, ILogout } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { inject, injectable } from 'inversify';

@injectable()
export class LogoutCapability implements ILogout {
constructor(@inject(AUTH_SYMBOLS.AuthService) private authService: IAuthService){}

async execute() {
    return this.authService.logout();
}
}