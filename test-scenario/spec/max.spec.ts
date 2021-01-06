import { validatorService } from "@f/ValidateService";
import { Course } from "test-scenario/numeric/max";


describe('decorator - max', () => {
    it('should have error msg', () => {
        const model = new Course();
        const model1 = new Course();

        model.customField = 100;
        model.participationCount = 100;
        model1.participationCount = 100;
        model1.customField = 10;

        const validation = validatorService.validate(model);
        const validation1 = validatorService.validate(model1);

        expect(validation.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
        expect(validation.filter(x => x.name === "customField")[0].msgs.length).toEqual(1);

        expect(validation1.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
        expect(validation1.filter(x => x.name === "customField")[0]).toBeUndefined();
    });

    it('should not duplicate error msg', () => {
        const model = new Course();
        let validation = validatorService.validate(model);
        validation = validatorService.validate(model);

        model.participationCount = 100;

        validation = validatorService.validate(model);

        expect(validation.filter(x => x.name === "customField")[0]).toBeUndefined();
        expect(validation.filter(x => x.name === "participationCount")[0].msgs.length).toEqual(1);
    });

    it('should not have error msg after data is clean', () => {
        const model = new Course();
        let validation = validatorService.validate(model);
        model.participationCount = 100;
        model.customField = 100;
        validation = validatorService.validate(model);

        model.participationCount = 1;
        model.customField = 1;

        validation = validatorService.validate(model);

        expect(validation.length).toEqual(0);
    });
});