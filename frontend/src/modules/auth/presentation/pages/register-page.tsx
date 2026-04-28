import { RegisterForm } from '@/modules/auth/presentation/components/register';
import { AuthPage } from '@/modules/auth/presentation/pages';

export function RegisterPage() {
    return (
        <AuthPage
            badge="Create Account"
            title="Join the portfolio"
            description="Sign up to start managing your projects and skills."
        >
            <RegisterForm />
        </AuthPage>
    );
}
