import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/modules/auth/presentation/hooks/use-loging';
import { useState } from 'react';
import { Route } from '@/routes/login';

export function Login() {
    const search = Route.useSearch();
    const { mutate, isPending, isError, error } = useLogin();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(credentials, {
            onSuccess: () => {
                const target = search.redirect || '/';
                window.location.assign(target);
            }
        });
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-12">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
                <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
            </div>

            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-md items-center">
                <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                    <header className="mb-8 space-y-2 text-white">
                        <p className="text-sm tracking-[0.22em] text-cyan-200/90 uppercase">Portfolio Access</p>
                        <h1 className="text-3xl font-semibold">Welcome back</h1>
                        <p className="text-sm text-slate-200">Sign in to manage projects, skills, and profile content.</p>
                    </header>

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
                </div>
            </section>
        </main>
    );
}