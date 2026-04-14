import type { ContactMessage } from "@/modules/contact/business/model/contact.model";
import type { IContactService } from "@/modules/contact/business/service/contact.service";
import { CONTACT_SYMBOLS } from "@/modules/contact/business/type/contact.symbols";
import { inject, injectable } from "inversify";

@injectable()
export class SendConstactMessageCapanility {
    constructor(@inject(CONTACT_SYMBOLS.contactService) private readonly contactService: IContactService) {}

    async execute(message: ContactMessage): Promise<void> {
        await this.contactService.sendContactMessage(message);
    }
}