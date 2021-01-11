# ts-model-validators
_this module helps build validation rules for models in typescript projects_.

![CircleCI](https://circleci.com/gh/quocchungthan/ts-model-validators.svg?style=svg)

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
| required       | error message | any |
| requiredIf      | the property name that if it has value current field is required. error message  | any |
| afterOrEqualTo | the other field's name to compare. error message   | string |
| beforeOrEqualTo      | the other field's name to compare. error message | string |
| dateFormat      | error message    | string |
| min             |  min value. error message     | number |
| max             | max value. error message= | number |
| minLength       | min value . error message    | string |
| maxLength        | max value . error message      | string |
| email           | error message    | string |
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

### Todos
- [ ] validation options for array
- [ ] improve usability of the factory
