import { format, parse } from "date-fns";

export function niceDate(d: string) {
  return format(parse(d, "ddLLy", new Date()), "LLLL d, yyyy");
}

export function dateString(d: string) {
  return format(parse(d, "ddLLy", new Date()), "yyyy-MM-dd");
}
