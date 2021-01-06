import { requiredIf } from "@r/common/requiredIf";

export class Course {

    public participationCount: number | null | undefined = 0;

    @requiredIf('participationCount', 'customField count is required if there\'s participant in the class')
    public customField: number | null | undefined = 0;
}