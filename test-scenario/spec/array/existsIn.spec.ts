import { validatorService } from "@f/ValidateService";
import { Contact } from "test-scenario/array/existsIn";

describe('Exists in', () => {
    it('Should have error msg', () => {
        const contact = new Contact();
        contact.code = "code4";

        expect(validatorService.validate(contact).length).toBe(1);
    });
});
