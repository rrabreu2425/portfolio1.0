import { coreContainer } from '@/core/dependency-injection';
import { IContactService, type ISendContactMessage } from '@/modules/contact/business/service/contact.service';
import { CONTACT_SYMBOLS } from '@/modules/contact/business/type/contact.symbols';
import { SendConstactMessageCapanility } from "@/modules/contact/capabilities/send-contact-message.capability";
import { ContactService } from "@/modules/contact/integration/services/contact.service";
import { Container } from "inversify";

const contactContainer = new Container({ parent: coreContainer });

contactContainer.bind<IContactService>(CONTACT_SYMBOLS.contactService).to(ContactService);
contactContainer.bind<ISendContactMessage>(CONTACT_SYMBOLS.sendContactMessage).to(SendConstactMessageCapanility);
export { contactContainer };
