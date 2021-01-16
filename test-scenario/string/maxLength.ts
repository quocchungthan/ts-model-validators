import { maxLength } from "@r/string/maxLength";

export class Education {

    @maxLength(3, "too many periods")
    periodId: string[] = [];

    @maxLength(3, "description must be shorter")
    description: string = "";
}