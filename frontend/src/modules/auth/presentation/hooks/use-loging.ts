import { useDependencyInjection } from '@/core/hooks/use-dependency-injection';
import type { LoginCredentials, LoginResponse } from '@/modules/auth/business/model/auth.model';
import type { ILogin } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { authContainer } from '@/modules/auth/integration/register-di';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
const loginCapability: ILogin = useDependencyInjection(authContainer, AUTH_SYMBOLS.Login);

const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
	mutationFn: (credentials) => loginCapability.execute(credentials),
	onSuccess: (data) => {
		localStorage.setItem('token', data.token);
		localStorage.setItem('auth_user', JSON.stringify(data.user));
	}
});

return mutation;

}