import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

// aop -- decorator
export function requiredIf(otherFieldKey: string, errorTemplate: string) {
    const rule = new Rule<any>(errorTemplate);
    rule.isValid = function (input: any, model: any): boolean {
        // not in ["", null, 0, undefined]
        if (!model[otherFieldKey]) {
            return true;
        }

        return input !== null && input !== undefined;
    }

    return validatorFactory.build(rule);
}