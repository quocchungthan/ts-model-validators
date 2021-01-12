import { validatorService } from "@f/ValidateService";
import { Contact } from "test-scenario/array/contains";

describe('Contains', () => {
    it('Should have error msg', () => {
        const contact = new Contact();
        contact.fetchedCode = ["code2"];

        expect(validatorService.validate(contact).length).toBe(1);
    });
});
