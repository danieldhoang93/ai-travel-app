import dayjs from "dayjs";

export const formatDateRange = (start: string, end: string): string => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const sameMonth = startDate.month() === endDate.month();
  const sameYear = startDate.year() === endDate.year();

  if (sameYear && sameMonth) {
    return `${startDate.format("MMMM D")} - ${endDate.format("D, YYYY")}`;
  } else if (sameYear) {
    return `${startDate.format("MMMM D")} - ${endDate.format("MMM D, YYYY")}`;
  } else {
    return `${startDate.format("MMM D, YYYY")} - ${endDate.format("MMM D, YYYY")}`;
  }
};
