import { validatorService } from "@f/ValidateService";
import { Course } from "test-scenario/common/required";


describe('decorator - common', () => {
    it('should have error msg', () => {
        const education = new Course();
        education.participationCount = null;
        education.customField = undefined;
        const validation = validatorService.validate(education);

        expect(validation.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
        expect(validation.filter(x => x.name === "customField")[0].msgs.length).toEqual(1);
    });

    it('should have no error msgs', () => {
        const education = new Course();
        education.participationCount = 0;
        education.customField = 1;
        const validation = validatorService.validate(education);

        expect(validation.length).toEqual(0);
    });

});