import type { RegisterCredentials } from '@/modules/auth/business/model/auth.model';
import type { IAuthService, IRegister } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { inject, injectable } from 'inversify';

@injectable()
export class RegisterCapability implements IRegister {
constructor(@inject(AUTH_SYMBOLS.AuthService) private authService: IAuthService){}

async execute(credentials: RegisterCredentials) {
    return this.authService.register(credentials);
}
}
