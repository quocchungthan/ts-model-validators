# Typescript(ts) Model Validator
_this module helps build validation rules for models in typescript projects_.

![CircleCI](https://circleci.com/gh/quocchungthan/ts-model-validators.svg?style=svg)
<p align="left">
    <a href="https://github.com/quocchungthan/ts-model-validators/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/quocchungthan/ts-model-validators" /></a>
    <a href="https://badge.fury.io/js/ts-model-validators" rel="nofollow"><img src="https://badge.fury.io/js/ts-model-validators.svg" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/ts-model-validators" rel="nofollow"><img src="https://img.shields.io/npm/dt/ts-model-validators.svg" alt="downloads count"></a>
</p>

### Installation & Usage
Install module:
```
npm i --save ts-model-validators
```
or
```
npm i --save @dodo-micro/ts-model-validators
```
Create your class and put some validation decorators on its properties you want to validate:
```ts
// some imports 
// ...
export class Education {

    @min(12, 'participation count must be equal or greater than {0}')
    public participationCount = 0;

    @min(10, 'custom msg without arg')
    public customField = 0;
}
```
Execute the validation and get error messages:
```ts
// some imports 
// ...
const education = new Education();
const validation: ValidationMessage[] = validatorService.validate(education);

/**
 * the structure of a validation Message:
    class ValidationMessage {
        name: string = "";
        msgs: string[] = [];
    }
 * /
```
### Built-in rules
With error message template, `{i}` will be replaced by `i-th` passed parameter.
| Decorator        |  Parameter   | Data type  |
| ------------- |:-------------|:-----:|
| required       | error template | any |
| requiredIf      | the property name that if it has value current field is required. error template  | any |
| afterOrEqualTo | the other field's name to compare. error template   | string |
| beforeOrEqualTo      | the other field's name to compare. error template | string |
| dateFormat      | error template    | string |
| min             |  min value. error template     | number |
| max             | max value. error template | number |
| minLength       | min value . error template    | string |
| maxLength        | max value . error template      | string |
| email           | error template    | string |

#### Update version 1.2.x
| Decorator        |  Parameter   | Data type  |
| ------------- |:-------------|:-----:|
| contains           | value that you want to check, error template    | array |
| existsIn           | array input, error template    | any |
| notIn           | array input, error template    | any |
| intersect           | array input, error template    | array |
### Create custom a validation rule

Beside built-in rules, we can easily create custom validation rule as a Decorator with ValidatorFactory:

```ts
// some imports 
// ...
export function min(minValue: number, errorTemplate: string) {
    const rule = new Rule<number>(errorTemplate, [minValue]);

    // the method check the validity of data, the second argument of this method can be the target object (check the rule beforeOrEqualTo)
    rule.isValid = function (input: number): boolean {
        return input >= this.msgArgs[0];
    }

    return validatorFactory.build(rule);
}


export function beforeOrEqualTo(anotherKey: string, errorTemplate: string) {
    const rule = new Rule<string>(errorTemplate, [anotherKey]);
    rule.isValid = function (input: string, entity: any): boolean {
        const anotherField = entity[anotherKey];
        const target = input;
        
        // ... 
        // Your implementations...
        // ...
        //   
    }

    return validatorFactory.build(rule);
}
```


#### Update version 1.2.x

Introduce new class `CreateValidatorFactory` to reduce complexity of decorator factories, usage: 

```ts
// some imports 
// ...

export function contains(element: string, errorTemplate: string) {
    return new CreateValidatorFactory<Array<string>>(errorTemplate)
        .arguments([element])
        .validateFunction((input) => input.includes(element))
        .build();
}
```

### Todos
- [ ] improve usability of module