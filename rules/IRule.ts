export interface IRule<T> {
    isValid: (input: T) => boolean;
    msg: () => string;
    setFieldKey(key: string | symbol): void;
    getFieldKey(): string;
    getField(entity: any): T;
};

export class Rule<T> implements IRule<T> {
    private key: string | symbol = "";

    constructor(private msgTemplate: string, public msgArgs: Array<string | number> = []) { }

    getFieldKey(): string {
        return this.key.toString();
    }

    setFieldKey(key: string | symbol): void {
        this.key = key;
    }

    getField(entity: any): T {
        return entity[this.key] as T;
    };

    isValid: (input: T) => boolean = () => {
        throw "Please implement method `isValid` of your rule: `rule.isValid = function (input: T): boolean { /* ... */ }`";
    }

    msg() {
        return this.msgArgs.reduce((acc: string, value, index) => acc.replace(`{${index}}`, "" + value), this.msgTemplate);
    }
};