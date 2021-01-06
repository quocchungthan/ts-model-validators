import { validatorService } from "@f/ValidateService";
import { Course } from "test-scenario/common/requiredIf";


describe('decorator - required if', () => {
    it('should have no error msg if the custom field and partyCount both non exists', () => {
        const obj = new Course();
        obj.customField = null;
        obj.participationCount = null;

        const validation = validatorService.validate(obj);

        expect(validation.length).toEqual(0);
    });

    it('should have no error msg if the custom field and partyCount both exists', () => {
        const obj = new Course();
        obj.customField = 1;
        obj.participationCount = 1;

        const validation = validatorService.validate(obj);

        expect(validation.length).toEqual(0);
    });

    it('should have no error msg if the custom field exists', () => {
        const obj = new Course();
        obj.customField = 1;
        obj.participationCount = null;

        const validation = validatorService.validate(obj);

        expect(validation.length).toEqual(0);
    });

    it('should have error msg only if the custom field doesn\'t exist and there\'s participation', () => {
        const obj = new Course();
        obj.customField = null;
        obj.participationCount = 1;

        const validation = validatorService.validate(obj);

        expect(validation.length).toEqual(1);
    });

});