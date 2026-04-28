import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegister } from '@/modules/auth/presentation/hooks/use-register';
import { useState } from 'react';
import { z } from 'zod';

const registerSchema = z
    .object({
        email: z.string().email('Please enter a valid email.'),
        password: z.string().min(8, 'Password must have at least 8 characters.'),
        confirmPassword: z.string().min(8, 'Confirm password must have at least 8 characters.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match.',
    });

export function RegisterForm() {
    const { mutate, isPending, isError, error } = useRegister();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const parsed = registerSchema.safeParse(formData);
        if (!parsed.success) {
            setValidationError(parsed.error.issues[0]?.message ?? 'Invalid form data.');
            return;
        }

        setValidationError(null);
        mutate({ email: parsed.data.email, password: parsed.data.password }, {
            onSuccess: () => {
                window.location.assign('/');
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
                    value={formData.email}
                    onChange={(event) =>
                        setFormData((current) => ({
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
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(event) =>
                        setFormData((current) => ({
                            ...current,
                            password: event.target.value
                        }))
                    }
                    className="border-white/30 bg-white/20 text-white placeholder:text-slate-300"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-slate-100">
                    Confirm Password
                </Label>
                <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={(event) =>
                        setFormData((current) => ({
                            ...current,
                            confirmPassword: event.target.value
                        }))
                    }
                    className="border-white/30 bg-white/20 text-white placeholder:text-slate-300"
                />
            </div>

            {validationError ? (
                <p className="text-sm text-red-300">{validationError}</p>
            ) : null}

            {isError ? (
                <p className="text-sm text-red-300">{error.message || 'Registration failed. Please try again.'}</p>
            ) : null}

            <Button
                type="submit"
                disabled={isPending}
                className="h-10 w-full rounded-2xl bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 font-semibold hover:from-cyan-300 hover:via-teal-300 hover:to-emerald-300"
            >
                {isPending ? 'Creating account...' : 'Register'}
            </Button>
        </form>
    );
}