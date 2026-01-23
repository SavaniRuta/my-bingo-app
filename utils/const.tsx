/**
 * Site URLs Configuration
 * Centralized management of all application routes
 */
export const SITE_URLS = {
  home: "/",

  auth: {
    login: "/login",
    register: "/register",
  },

  forgot_password: "/forgot-password",
  login_verify: "/login-verify",
  login_password: "/login-password",
  account_exists: "/account-exists",
  not_found: "/not-found",
  reset_password: "/reset-password",

  email: "/email",
  register_verify: "/register-verify",
  success: "/success",

  template: "/template",

  empty_dashboard: "dashboard/empty-dashboard",

  dashboard: "/dashboard",
  my_cards: "/dashboard/my-cards",
  account: "/dashboard/account",
  games: "/dashboard/games",
  appearance: "/dashboard/appearance",
  billing: "/dashboard/billing",
  integrations: "/dashboard/integrations",
  changelog: "/dashboard/changelog",
  orders: "/dashboard/orders",
} as const;

export function formatSlugToTitle(slug: string) {
  return slug
  .replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());
}
