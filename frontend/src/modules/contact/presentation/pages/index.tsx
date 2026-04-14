import { useSendContactMessage } from '@/modules/contact/presentation/hooks/use-send-contact-message';
import { ContactForm } from '@/modules/contact/presentation/components/contact-form';

export function ContactPage() {
    const { mutate: sendMessage, isPending } = useSendContactMessage();

    return (
        <div>
            <ContactForm onSubmit={sendMessage} isPending={isPending} />
        </div>
    );
}