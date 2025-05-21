interface DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export const formatDateTime = (dateTime: DateTime): string => {
  return `${dateTime.year}년 ${dateTime.month}월${dateTime.day}일 ${String(
    dateTime.hour
  ).padStart(2, "0")}:${String(dateTime.minute).padStart(2, "0")}`;
};
