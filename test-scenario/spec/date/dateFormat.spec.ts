import { validatorService } from "@f/ValidateService";
import { dateObj } from "@h/date";
import { Course } from "test-scenario/date/dateFormat";


describe('decorator - date format', () => {
    it('should have error msg', () => {
        const model = new Course();
        const model1 = new Course();

        model1.startDate = "2021-12-31";

        const validation = validatorService.validate(model);
        const validation1 = validatorService.validate(model1);

        expect(validation.filter(x => x.name === "startDate")[0].msgs.length).toEqual(1);
        expect(validation1.filter(x => x.name === "startDate")[0]).toBeUndefined();
    });

    it('should have error msg 2', () => {
        const model = new Course();
        const model1 = new Course();

        model1.startDate = "2021-00-31";
        model.startDate = "2021-12-32";

        const validation = validatorService.validate(model);
        const validation1 = validatorService.validate(model1);

        expect(validation.filter(x => x.name === "startDate")[0].msgs.length).toEqual(1);
        expect(validation1.filter(x => x.name === "startDate")[0].msgs.length).toEqual(1);
    });

    it('should have error msg 3', () => {
        const model1 = new Course();
        model1.startDate = "just a text";

        const validation1 = validatorService.validate(model1);

        expect(validation1.filter(x => x.name === "startDate")[0].msgs.length).toEqual(1);
    });

    it('should be able to convert to date obj', () => {
        const model1 = new Course();
        model1.startDate = "2021-12-31";
        const dateObject = dateObj(model1.startDate);

        expect(dateObject).not.toBeNull();
    });

});