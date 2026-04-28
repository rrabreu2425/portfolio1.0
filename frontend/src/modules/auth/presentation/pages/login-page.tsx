import { LoginForm } from '@/modules/auth/presentation/components/login';
import { AuthPage } from '@/modules/auth/presentation/pages';
import { Route } from '@/routes/login';

export function LoginPage() {
    const search = Route.useSearch();

    return (
        <AuthPage
            badge="Portfolio Access"
            title="Welcome back"
            description="Sign in to manage projects, skills, and profile content."
        >
            <LoginForm redirectTo={search.redirect} />
        </AuthPage>
    );
}
