import { max } from "@r/numeric/max";

export class Course {

    @max(12, 'participation count must be equal or less than {0}')
    public participationCount = 0;

    @max(10, 'custom msg without arg')
    public customField = 0;
}