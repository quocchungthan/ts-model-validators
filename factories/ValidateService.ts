import { IRule } from "@r/IRule";
import { ValidatorFactory } from "./ValidatorFactory";

class ValidationMessage {
    name: string = "";
    msgs: string[] = [];
}

class ValidatorService {
    public static ERRORS_FIELDS = "__cbt_ts_model_errors";
    public validate(model: any): ValidationMessage[] {
        let errors = [];
        const validatorRules = model[ValidatorFactory.VALIDATE_METHOD_FIELDS] as IRule<any>[] || [];

        for (let rule of validatorRules) {
            // should put interceptor here. reduce one call of `rule's method`
            const valid = rule.isValid(rule.getField(model));
            if (!valid) {
                errors.push({
                    name: rule.getFieldKey(),
                    msgs: [rule.msg()]
                });
            }
        }

        return model[ValidatorService.ERRORS_FIELDS] = this.uniquify(errors);
    }
    private uniquify(errors: ValidationMessage[]): ValidationMessage[] {
        return errors.map(x => x.name).reduce((a, x) => {
            if (a.indexOf(x) === -1) {
                a.push(x);
            }

            return a;
        }, [] as string[])
            .map(name => ({
                name,
                msgs: errors.reduce((a, x) => {
                    if (x.name === name) {
                        return a.concat(x.msgs);
                    }
                    return a;
                }, [] as string[]).filter((x, i, thisArgs) => thisArgs.indexOf(x) === i)
            }));
    }
}

export const validatorService = new ValidatorService();