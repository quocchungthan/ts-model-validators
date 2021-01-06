import { min } from "@r/numeric/min";

export class Education {

    @min(12, 'participation count must be equal or greater than {0}')
    public participationCount = 0;

    @min(10, 'custom msg without arg')
    public customField = 0;
}