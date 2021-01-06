import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

// aop -- decorator
export function minLength(minValue: number, errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate, [minValue]);
    rule.isValid = function (input: string): boolean {
        return input?.length >= minValue;
    }

    return validatorFactory.build(rule);
}