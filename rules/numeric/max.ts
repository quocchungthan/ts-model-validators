import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";

// aop -- decorator
export function max(minValue: number, errorTemplate: string) {
    const rule = new Rule<number>(errorTemplate, [minValue]);
    rule.isValid = function (input: number): boolean {
        return input <= this.msgArgs[0];
    }

    return validatorFactory.build(rule);
}