import { CreateValidatorFactory } from "@f/ValidatorFactory";

// @validator()
export function notIn(elements: Array<any>, errorTemplate: string) {
    return new CreateValidatorFactory<any>(errorTemplate)
        .arguments([elements.join(', ')])
        .validateFunction((input) => !elements.includes(input))
        .build();
}