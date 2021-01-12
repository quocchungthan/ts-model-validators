import { CreateValidatorFactory } from "@f/ValidatorFactory";

export function contains(element: string, errorTemplate: string) {
    return new CreateValidatorFactory<Array<string>>(errorTemplate)
        .arguments([element])
        .validateFunction((input) => input.includes(element))
        .build();
}