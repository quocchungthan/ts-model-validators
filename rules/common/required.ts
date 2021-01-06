import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

// aop -- decorator
export function required(errorTemplate: string) {
    const rule = new Rule<any>(errorTemplate);
    rule.isValid = function (input: any): boolean {
        return input !== null && input !== undefined;
    }

    return validatorFactory.build(rule);
}