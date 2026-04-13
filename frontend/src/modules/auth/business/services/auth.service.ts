import type { LoginCredentials, LoginResponse, RegisterCredentials } from '@/modules/auth/business/model/auth.model';
export interface ILogin{
    execute(credentials: LoginCredentials): Promise<LoginResponse>;
}

export interface IRegister{
    execute(credentials: RegisterCredentials): Promise<LoginResponse>;
}

export interface ILogout{
    execute(): Promise<void>;
}

export abstract class  IAuthService {
    abstract login(credentials: LoginCredentials): Promise<LoginResponse>;
    abstract register(credentials: RegisterCredentials): Promise<LoginResponse>;
    abstract logout(): Promise<void>;
}