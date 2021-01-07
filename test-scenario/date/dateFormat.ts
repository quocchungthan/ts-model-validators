import { dateFormat } from "@r/date/dateFormat";

export class Course {
    @dateFormat('invalid format')
    startDate: string = "";
}