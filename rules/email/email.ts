import { validatorFactory } from "@f/ValidatorFactory";
import { Rule } from "@r/IRule";


export const validEmails = [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]

// aop -- decorator
export function email(errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate);
    rule.isValid = function (input: string): boolean {
        return validEmails.some(x => x.test(input));
    }

    return validatorFactory.build(rule);
}