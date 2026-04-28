import { Footer } from '@/components/bundled/footer';
import { MainArticule } from '@/components/bundled/main-articule';
import type { ReactNode } from 'react';

type AuthPageProps = {
    badge: string;
    title: string;
    description: string;
    children: ReactNode;
};

export function AuthPage({ badge, title, description, children }: AuthPageProps) {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 px-4 py-12">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
                <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
            </div>

            <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center">
                <div className="w-full space-y-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                        <MainArticule />
                        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl lg:justify-self-end lg:min-w-120">
                            <header className="mb-8 space-y-2 text-white">
                                <p className="text-sm tracking-[0.22em] text-cyan-200/90 uppercase">{badge}</p>
                                <h1 className="text-3xl font-semibold">{title}</h1>
                                <p className="text-sm text-slate-200">{description}</p>
                            </header>

                            {children}
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative z-10 mt-auto">
                <Footer />
            </div>
        </main>
    );
}