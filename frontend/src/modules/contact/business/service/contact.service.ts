import type { ContactMessage } from "@/modules/contact/business/model/contact.model";

export interface ISendContactMessage {
    execute(message: ContactMessage): Promise<void>;
}

export abstract class IContactService {
    abstract sendContactMessage(message: ContactMessage): Promise<void>;
}