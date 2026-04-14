import { APIClientService } from '@/core/api/api-client';
import { CORE_DEPENDENCY_INJECTION_TYPES } from '@/core/dependency-injection/symbols';
import type { ContactMessage } from "@/modules/contact/business/model/contact.model";
import type { IContactService } from "@/modules/contact/business/service/contact.service";
import { inject, injectable } from "inversify";


@injectable()
export class ContactService implements IContactService{
    constructor(
            @inject(CORE_DEPENDENCY_INJECTION_TYPES.apiClient) private readonly apiClient: APIClientService
        ){}

    async sendContactMessage(message: ContactMessage): Promise<void> {
            await this.apiClient.post('message/', message, { withCredentials: false });
    }
}