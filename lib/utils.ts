import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Site URLs Configuration
 * Centralized management of all application routes
 */
export const SITE_URLS = {
  // Main routes
  HOME: "/",

  // Authentication routes - Main pages
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },

  // Login flow sub-routes
  LOGIN: {
    FORGOT_PASSWORD: "/login/forgot-password",
    VERIFY: "/login/verify",
    LOGIN_PASSWORD: "/login/login-password",
    ACCOUNT_EXISTS: "/login/account-exists",
    NOT_FOUND: "/login/not-found",
    RESET_PASSWORD: "/login/reset-password",
  },

  // Register flow sub-routes
  REGISTER: {
    EMAIL: "/register/email",
    VERIFY: "/register/verify",
    SUCCESS: "/register/success",
  },

  // For templates page
  TEMPLATE: "/template",

  // For Dashboard page
  // DASHBOARD: "/dashbaord",
  DASHBOARD: {
    DASHBOARD: "/dashboard",
    MY_CARDS: "/dashboard/my-cards",
  }

} as const;


export function formatSlugToTitle(slug: string) {
  return slug
    .replace(/-/g, " ")            // replace hyphens with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words
}