import { parseISO, format } from "date-fns";

export const formatToLocalDate = (date: string): string => {
  return format(parseISO(date), "dd/MM/yyyy");
};
