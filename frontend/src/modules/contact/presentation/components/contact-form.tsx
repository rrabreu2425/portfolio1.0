import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { ContactMessage } from '@/modules/contact/business/model/contact.model';

interface ContactFormProps {
    onSubmit: (data: ContactMessage) => void;
    isPending: boolean;
}

export function ContactForm({ onSubmit, isPending }: ContactFormProps) {
    const [form, setForm] = useState<ContactMessage>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Message</Label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(
                        'w-full rounded-3xl border border-transparent bg-input/50 px-3 py-2 text-sm',
                        'transition-[color,box-shadow,background-color] outline-none resize-none',
                        'placeholder:text-muted-foreground',
                        'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30',
                        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                    )}
                />
            </div>
            <Button type="submit" disabled={isPending}>
                {isPending ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}
