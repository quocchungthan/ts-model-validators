import { contains } from "@r/array/contains";

export class Contact {

    @contains("code1", "incorrect code")
    fetchedCode: string[] = [];
}