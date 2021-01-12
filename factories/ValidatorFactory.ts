import { IRule, Rule } from "@r/IRule";

// factory pattern
export class ValidatorFactory {
    public static VALIDATE_METHOD_FIELDS = "__cbt_ts_model_validation";
    public build(rule: IRule<any>): (target: any, key: string | symbol) => void {
        return (target: any, key: string | symbol) => {
            if (target[ValidatorFactory.VALIDATE_METHOD_FIELDS]) {
            } else {
                target[ValidatorFactory.VALIDATE_METHOD_FIELDS] = [] as IRule<any>[];
            }
            rule.setFieldKey(key);

            target[ValidatorFactory.VALIDATE_METHOD_FIELDS].push(rule);
        };
    }
}

export class CreateValidatorFactory<PropertyType> extends ValidatorFactory {
    private rule: Rule<PropertyType>;
    constructor(msgTemplate: string = "", args: Array<string | number> = []) {
        super();
        this.rule = new Rule<PropertyType>(msgTemplate, args);
    }

    public arguments(args: Array<string | number> = []) {
        this.rule.msgArgs = args;

        return this;
    }

    public validateFunction(method: (input: PropertyType, model?: any) => boolean) {
        this.rule.isValid = method;

        return this;
    }

    public build(): (target: any, key: string | symbol) => void {
        return super.build(this.rule);
    }
}

export const validatorFactory = new ValidatorFactory();