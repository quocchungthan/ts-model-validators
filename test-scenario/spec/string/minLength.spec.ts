import { validatorService } from "@f/ValidateService";
import { Education } from "test-scenario/string/minLength";

describe('min Length string and array', () => {
    it('should support string type', () => {
        const education = new Education();
        education.periodId = ["1", "2"];
        let validation = validatorService.validate(education);

        expect(validation.filter(x => x.name === "description")[0].msgs.length).toEqual(1);
    });

    it('should support array type', () => {
        const education = new Education();
        education.description = ["1", "2"].join(',');
        let validation = validatorService.validate(education);

        expect(validation.filter(x => x.name === "periodId")[0].msgs.length).toEqual(1);
    });
});
