import { email } from "@r/email/email";

export class Contact {

    @email("not valid")
    email: string = "";
}