import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";
import { dateObj } from "@h/date";

// aop -- decorator
export function beforeOrEqualTo(anotherKey: string, errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate, [anotherKey]);
    rule.isValid = function (input: string, entity: any): boolean {
        const anotherField = dateObj(entity[anotherKey]);
        const target = dateObj(input);

        return target === null || anotherField === null || target <= anotherField;
    }

    return validatorFactory.build(rule);
}