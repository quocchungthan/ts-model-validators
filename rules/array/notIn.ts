import { CreateValidatorFactory } from "@f/ValidatorFactory";

// @validator()
export function notIn(elements: Array<string>, errorTemplate: string) {
    return new CreateValidatorFactory<string>(errorTemplate)
        .arguments([elements.join(', ')])
        .validateFunction((input) => !elements.includes(input))
        .build();
}