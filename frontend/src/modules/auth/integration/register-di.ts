import { coreContainer } from '@/core/dependency-injection';
import { IAuthService, type ILogin, type ILogout } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { LoginCapability } from '@/modules/auth/capabilities/login.capability';
import { LogoutCapability } from '@/modules/auth/capabilities/logout.capability';
import { AuthService } from '@/modules/auth/integration/services/auth.services';
import { Container } from 'inversify';

export const authContainer = new Container({ parent: coreContainer });

authContainer.bind<IAuthService>(AUTH_SYMBOLS.AuthService).to(AuthService);
authContainer.bind<ILogin>(AUTH_SYMBOLS.Login).to(LoginCapability);
authContainer.bind<ILogout>(AUTH_SYMBOLS.Logout).to(LogoutCapability);

