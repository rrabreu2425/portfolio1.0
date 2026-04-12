import { useDependencyInjection } from '@/core/hooks/use-dependency-injection';
import type { ILogout } from '@/modules/auth/business/services/auth.service';
import { AUTH_SYMBOLS } from '@/modules/auth/business/types/auth.symbols';
import { authContainer } from '@/modules/auth/integration/register-di';
import { useMutation } from '@tanstack/react-query';


export const useLogout = () => {
 const logoutCapability: ILogout = useDependencyInjection(authContainer, AUTH_SYMBOLS.Logout);
 return useMutation({
    mutationFn: () => logoutCapability.execute(),
    onSettled: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('auth_user');
    }
 });
}