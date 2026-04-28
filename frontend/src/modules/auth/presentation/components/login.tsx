import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/modules/auth/presentation/hooks/use-loging';
import { useState } from 'react';

type LoginFormProps = {
    redirectTo?: string;
};

export function LoginForm({ redirectTo }: LoginFormProps) {
    const { mutate, isPending, isError, error } = useLogin();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(credentials, {
            onSuccess: () => {
                const target = redirectTo || '/';
                window.location.assign(target);
            }
        });
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-100">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={credentials.email}
                    onChange={(event) =>
                        setCredentials((current) => ({
                            ...current,
                            email: event.target.value
                        }))
                    }
                    className="border-white/30 bg-white/20 text-white placeholder:text-slate-300"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-100">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={credentials.password}
                    onChange={(event) =>
                        setCredentials((current) => ({
                            ...current,
                            password: event.target.value
                        }))
                    }
                    className="border-white/30 bg-white/20 text-white placeholder:text-slate-300"
                />
            </div>

            {isError ? (
                <p className="text-sm text-red-300">{error.message || 'Login failed. Please try again.'}</p>
            ) : null}

            <Button
                type="submit"
                disabled={isPending}
                className="h-10 w-full rounded-2xl bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 font-semibold hover:from-cyan-300 hover:via-teal-300 hover:to-emerald-300"
            >
                {isPending ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    );
}