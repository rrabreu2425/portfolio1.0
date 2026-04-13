export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    email: string;
    password: string;
}

export interface AuthUser {
    id: number;
    email: string;
    username: string;
}

export interface LoginResponse {
    token: string;
    user: AuthUser;
}