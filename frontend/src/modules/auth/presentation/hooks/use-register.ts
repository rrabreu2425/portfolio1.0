import { useDependencyInjection } from '@/core/hooks/use-dependency-injection';
import type { RegisterCredentials, LoginResponse } from '@/modules/auth/business/model/auth.model';
import type { IRegister } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { authContainer } from '@/modules/auth/integration/register-di';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
const registerCapability: IRegister = useDependencyInjection(authContainer, AUTH_SYMBOLS.Register);

const mutation = useMutation<LoginResponse, Error, RegisterCredentials>({
	mutationFn: (credentials) => registerCapability.execute(credentials),
	onSuccess: (data) => {
		localStorage.setItem('token', data.token);
		localStorage.setItem('auth_user', JSON.stringify(data.user));
	}
});

return mutation;

}
