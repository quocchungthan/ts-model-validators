import { required } from "@r/common/required";

export class Course {

    @required('participation count is required')
    public participationCount: number | null | undefined = 0;

    @required('customField count is required')
    public customField: number | null | undefined = 0;
}