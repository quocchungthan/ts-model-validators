import { CreateValidatorFactory } from "@f/ValidatorFactory";

// @validator()
export function intersect(elements: Array<string>, errorTemplate: string) {
    return new CreateValidatorFactory<Array<string>>(errorTemplate)
        .arguments([elements.join(', ')])
        .validateFunction((input) => elements.some(x => input.includes(x)))
        .build();
}