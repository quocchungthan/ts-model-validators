import { validatorService } from "@f/ValidateService";
import { Education } from "test-scenario/numeric/min";


describe('decorator - min', () => {
    it('should have error msg', () => {
        const education = new Education();
        const education1 = new Education();

        education1.customField = 10;

        const validation = validatorService.validate(education);
        const validation1 = validatorService.validate(education1);

        expect(validation.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
        expect(validation.filter(x => x.name === "customField")[0].msgs.length).toEqual(1);

        expect(validation1.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
        expect(validation1.filter(x => x.name === "customField")[0]).toBeUndefined();
    });

    it('should not duplicate error msg', () => {
        const education = new Education();
        let validation = validatorService.validate(education);
        validation = validatorService.validate(education);

        education.participationCount = 100;

        validation = validatorService.validate(education);

        expect(validation.filter(x => x.name === "participationCount")[0]).toBeUndefined();
        expect(validation.filter(x => x.name === "customField")[0].msgs.length).toEqual(1);
    });
});