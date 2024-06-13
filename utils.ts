import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

type QueryStringProps = {
  name: string;
  value: string;
  searchParams: URLSearchParams;
  queryToRemove?: string;
};

export function createQueryString({
  name,
  value,
  searchParams,
  queryToRemove,
}: QueryStringProps) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  if (queryToRemove) {
    params.delete(queryToRemove);
  }
  return params.toString();
}
