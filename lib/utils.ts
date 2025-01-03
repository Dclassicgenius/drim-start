import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatViews(count: number, singular: string, plural: string) {
  if (count === 1) {
    return `1 ${singular}`;
  }

  let formattedCount;

  if (count >= 1_000_000) {
    formattedCount = (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (count >= 1_000) {
    formattedCount = (count / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    formattedCount = count;
  }

  return `${formattedCount} ${plural}`;
}
