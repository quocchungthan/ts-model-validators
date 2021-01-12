import { validatorService } from "@f/ValidateService";
import { Contact } from "test-scenario/email/email";

describe('email', () => {
    it('should have an error msg', () => {
        const contact = new Contact();
        contact.email = "quocchung.than@com";

        const validation = validatorService.validate(contact);

        expect(validation.length).toBe(1);
    });

    it('should have no error msgs', () => {
        const contact = new Contact();
        contact.email = "quocchung.than@gmail.com";
        const validation = validatorService.validate(contact);

        expect(validation.length).toBe(0);
    });
});
