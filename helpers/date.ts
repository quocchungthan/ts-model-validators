
export const validDates = [/^((19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/];

const dateFuncs = [
    (str: string): Date => {
        const [year, _, month, date] = str.match(validDates[0])?.map(x => +x).filter(x => x) || [];

        return new Date(year, month - 1, date);
    }
];

export function dateObj(dateStr: string): Date | null {
    return validDates.reduce((acc, v, i) => {
        if (v.test(dateStr)) {
            return dateFuncs[i](dateStr);
        }

        return acc;
    }, null as Date | null);
}