import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";
import { validDates } from "@h/date";

// aop -- decorator
export function dateFormat(errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate);
    rule.isValid = function (input: string): boolean {
        return validDates.some(x => x.test(input));
    }

    return validatorFactory.build(rule);
}