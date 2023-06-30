import { EmailData } from "../dto/email.interface";
export default class EmailService {
    SendEmail(EmailProps: EmailData): Promise<void>;
}
