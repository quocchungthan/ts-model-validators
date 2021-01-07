import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

export const validDates = [/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/];

// aop -- decorator
export function dateFormat(errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate);
    rule.isValid = function (input: string): boolean {
        return validDates.some(x => x.test(input));
    }

    return validatorFactory.build(rule);
}