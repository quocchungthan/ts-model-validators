import { IRule } from "@r/IRule";

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

export const validatorFactory = new ValidatorFactory();