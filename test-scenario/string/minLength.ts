import { minLength } from "@r/string/minLength";

export class Education {

    @minLength(1, "please select at least {0} period")
    periodId: string[] = [];

    @minLength(3, "description must be longer")
    description: string = "";
}