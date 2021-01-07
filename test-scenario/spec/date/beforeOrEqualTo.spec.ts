import { validatorService } from "@f/ValidateService";
import { dateObj } from "@h/date";
import { Education } from "test-scenario/date/beforeOrEqualTo";


describe('decorator - dateBeforeOrEqualTo', () => {
    it('should have no error msg since start date and end date are the same', () => {
        const model1 = new Education();

        model1.startDate = "2021-12-31";
        model1.endDate = "2021-12-31";

        const validation1 = validatorService.validate(model1);

        expect(validation1.filter(x => x.name === "startDate")[0]).toBeUndefined();
    });

    it('should have no error msg since one of them is null', () => {
        const model1 = new Education();
        const model2 = new Education();

        model1.startDate = "2021-12-31";
        model1.endDate = null;
        model2.startDate = null;
        model2.endDate = "2021-12-31";

        const validation1 = validatorService.validate(model1);
        const validation2 = validatorService.validate(model2);

        expect(validation1.filter(x => x.name === "startDate")[0]).toBeUndefined();
        expect(validation2.filter(x => x.name === "startDate")[0]).toBeUndefined();
    });

    it('should have error msg cuz it\'s obvious', () => {
        const model1 = new Education();

        model1.startDate = "2021-12-31";
        model1.endDate = "2021-12-30";

        const validation1 = validatorService.validate(model1);

        expect(validation1.filter(x => x.name === "startDate")[0].msgs.length).toEqual(1);
    });

});