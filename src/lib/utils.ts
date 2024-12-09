// Import the `clsx` utility, which is used for conditionally joining class names together.
// `ClassValue` is the type that describes the possible values for class names.
import { clsx, type ClassValue } from "clsx";

// Import the `twMerge` utility from `tailwind-merge`, which is used to merge Tailwind CSS class names
// and resolve conflicts (e.g., handle overrides like "bg-red-500 bg-blue-500" to keep the latest).
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally combine class names and handle Tailwind CSS class conflicts.
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  // Combine class names using `clsx` and resolve Tailwind CSS class conflicts with `twMerge`.
  return twMerge(clsx(inputs));
}
