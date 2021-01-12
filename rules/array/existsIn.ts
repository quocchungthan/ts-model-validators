import { CreateValidatorFactory } from "@f/ValidatorFactory";

// @validator()
export function existsIn(elements: Array<string>, errorTemplate: string) {
    return new CreateValidatorFactory<string>(errorTemplate)
        .arguments([elements.join(', ')])
        .validateFunction((input) => elements.includes(input))
        .build();
}