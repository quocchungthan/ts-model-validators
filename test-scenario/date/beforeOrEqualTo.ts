import { beforeOrEqualTo } from "@r/date/beforeOrEqualTo";

export class Education {

    @beforeOrEqualTo('endDate', 'invalid data')
    startDate: string | null = null;

    endDate: string | null = null;
}