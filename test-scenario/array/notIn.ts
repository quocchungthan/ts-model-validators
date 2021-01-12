import { notIn } from "@r/array/notIn";

export class Contact {

    @notIn(["1", "2", "3"], "the id is already exists")
    id: string = "";
}