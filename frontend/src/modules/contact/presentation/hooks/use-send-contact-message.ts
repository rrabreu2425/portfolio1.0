import { useDependencyInjection } from '@/core/hooks/use-dependency-injection';
import type { ContactMessage } from "@/modules/contact/business/model/contact.model";
import type { ISendContactMessage } from "@/modules/contact/business/service/contact.service";
import { CONTACT_SYMBOLS } from "@/modules/contact/business/type/contact.symbols";
import { contactContainer } from '@/modules/contact/integration/contact-di';
import { useMutation } from "@tanstack/react-query";

export const useSendContactMessage = () => {
    const sendMessageCapability: ISendContactMessage = useDependencyInjection(contactContainer, CONTACT_SYMBOLS.sendContactMessage);

    return useMutation<void, unknown, ContactMessage>({
        mutationFn:(message) => sendMessageCapability.execute(message),
        onSuccess: () => { alert('Message sent successfully!');
        },
        onError: () => {
            alert('Failed to send message. Please try again later.');
        }
    });
}