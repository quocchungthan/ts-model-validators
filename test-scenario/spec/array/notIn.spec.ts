import { validatorService } from "@f/ValidateService";
import { Contact } from "test-scenario/array/notIn";

describe('Not in', () => {
    it('Should have error msg', () => {
        const contact = new Contact();
        contact.id = "2";

        expect(validatorService.validate(contact).length).toBe(1);
    });
});
