"use client";
import type { Metadata } from "next";
import "@styles/global.css";
import { Blend, User, CreditCard, SwatchBook } from "lucide-react";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const SETTINGS_ROUTES = [
  {
    href: SITE_URLS.account,
    label: "Account",
    icon: User,
  },
  {
    href: SITE_URLS.billing,
    label: "Billing",
    icon: CreditCard,
  },
  {
    href: SITE_URLS.integrations,
    label: "Integrations",
    icon: Blend,
  },
  {
    href: SITE_URLS.appearance,
    label: "Appearance",
    icon: SwatchBook,
  },
] as const;

export default function SettingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div>
      <div className="py-8">
        <div className="dashboard-container">
          <div className="flex items-start flex-wrap gap-10 lg:gap-12">
            <div className="flex-col gap-1 max-w-64 w-full hidden lg:flex">
              {SETTINGS_ROUTES.map((route) => {
                const Icon = route.icon;
                const isActive = pathname.startsWith(route.href);

                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }),
                      "text-sm justify-start",
                      isActive && "bg-sidebar-accent",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {route.label}
                  </Link>
                );
              })}
            </div>

            {/* <div> */}
            {children}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
