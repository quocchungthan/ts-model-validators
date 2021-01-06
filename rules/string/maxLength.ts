import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

// aop -- decorator
export function maxLength(maxValue: number, errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate, [maxValue]);
    rule.isValid = function (input: string): boolean {
        return input?.length <= maxValue;
    }

    return validatorFactory.build(rule);
}