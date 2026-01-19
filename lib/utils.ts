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
  DASHBOARD: "/dashbaord",

} as const;
