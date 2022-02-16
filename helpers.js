// convert date of the year to date string
export const dateFromDay = (year, day) => {
    const date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)).toDateString(); // add the number of days
};
// chunk an array to n pieces
export const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
