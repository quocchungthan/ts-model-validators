import { existsIn } from "@r/array/existsIn";

export class Contact {

    @existsIn(["code1", "code2", "code3"], "incorrect code")
    code: string = "";
}