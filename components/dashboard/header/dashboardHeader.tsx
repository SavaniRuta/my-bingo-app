import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SITE_URLS, formatSlugToTitle } from "@/utils/const";
import {
  ChartLine,
  EllipsisVertical,
  Funnel,
  User,
  CreditCard,
  Blend,
  SwatchBook,
} from "lucide-react";
import Link from "next/link";

import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ReactNode } from "react";
import { SearchInput } from "../searchInput/searchInput";

type DashboardHeaderProps = {
  pathName?: string;
  children?: ReactNode;
  customTitle?: string;
};

const DROPDOWN_ITEMS = [
  {
    label: "Account",
    href: SITE_URLS.account,
    icon: User,
  },
  {
    label: "Billing",
    href: SITE_URLS.billing,
    icon: CreditCard,
  },
  {
    label: "Integrations",
    href: SITE_URLS.integrations,
    icon: Blend,
  },
  {
    label: "Appearance",
    href: SITE_URLS.appearance,
    icon: SwatchBook,
  },
] as const;

const SETTINGS_ROUTES = [
  SITE_URLS.account,
  SITE_URLS.billing,
  SITE_URLS.integrations,
  SITE_URLS.appearance,
];

const PAGE_CONFIG = [
  {
    pathName: SITE_URLS.dashboard,
    title: "Dashboard",
    description: "An overview of your recent account activity.",
  },
  {
    pathName: SITE_URLS.my_cards,
    title: "My cards",
    description:
      "Edit, publish, share, print or play online with all the cards you've created.",
  },
  {
    pathName: SITE_URLS.games,
    title: "Active games",
    description: "Manage your active games.",
  },
  {
    pathName: SITE_URLS.empty_dashboard,
    title: "Dashboard",
    description: "An overview of your recent account activity.",
  },
  {
    pathName: SITE_URLS.changelog,
    title: "What's new",
    description: "New updates and announcements from Bingo Card Creator.",
  },
  {
    pathName: SITE_URLS.orders,
    title: "Orders",
    description: "View your bingo card delivery order history.",
  },
  {
    pathName: SITE_URLS.account,
    title: "Settings",
    description: "Manage your account settings.",
  },
  {
    pathName: SITE_URLS.billing,
    title: "Settings",
    description: "Manage your account settings.",
  },
  {
    pathName: SITE_URLS.appearance,
    title: "Settings",
    description: "Manage your account settings.",
  },
  {
    pathName: SITE_URLS.integrations,
    title: "Settings",
    description: "Manage your account settings.",
  },
] as const;

export function DashboardHeader({
  pathName = "",
  customTitle = "",
  children,
}: DashboardHeaderProps) {
  const pageConfig = PAGE_CONFIG.find((item) => item.pathName === pathName);

  const title = formatSlugToTitle(customTitle || pageConfig?.title || "");

  const description = pageConfig?.description;

  return (
    <>
      <div className="overflow-y-auto lg:pl-0 flex-auto">
        <div className="bg-card border-b border-border py-5 lg:py-7 shadow-xs">
          <div className="dashboard-container">
            {pathName !== SITE_URLS.dashboard && (
              <Breadcrumb className="mb-5">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={SITE_URLS.dashboard}>
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={pathName}>{title}</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            )}

            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h1 className="font-recoleta text-3xl font-bold">{title}</h1>
                  {(pathName === SITE_URLS.my_cards ||
                    pathName === SITE_URLS.games ||
                    pathName === SITE_URLS.orders) && (
                    <Badge variant="secondary">
                      {pathName === SITE_URLS.my_cards && "21 cards"}
                      {pathName === SITE_URLS.games && "21 games"}
                      {pathName === SITE_URLS.orders && "21 orders"}
                    </Badge>
                  )}
                </div>

                {description && (
                  <p className="font-inter text-base font-normal text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>

              <div className="hidden lg:flex items-center gap-2">
                {pathName === SITE_URLS.dashboard && (
                  <>
                    <SearchInput
                      placeholder="Search"
                    />

                    <Link
                      href={SITE_URLS.dashboard}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                      )}
                    >
                      <ChartLine />
                    </Link>
                  </>
                )}

                {pathName === SITE_URLS.my_cards && (
                  <>
                    <SearchInput
                      placeholder="Search"
                    />

                    <Button variant="outline" size="icon">
                      <Funnel />
                    </Button>

                    <Button variant="outline" size="icon">
                      <ChartLine />
                    </Button>

                    <Button variant="destructive" disabled>
                      Delete
                    </Button>
                  </>
                )}

                {pathName === SITE_URLS.games && (
                  <>
                    <SearchInput
                      placeholder="Search"
                    />

                    <Link
                      href={SITE_URLS.dashboard}
                      className={cn(buttonVariants({ variant: "secondary" }))}
                    >
                      Start new game
                    </Link>
                  </>
                )}
              </div>

              {SETTINGS_ROUTES.some((route) => pathName.startsWith(route)) && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="icon">
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {DROPDOWN_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathName.startsWith(item.href);

                      return (
                        <DropdownMenuItem
                          key={item.href}
                          asChild
                          className={cn(
                            "cursor-pointer gap-2",
                            isActive && "bg-sidebar-accent",
                          )}
                        >
                          <Link href={item.href}>
                            <Icon className="size-4" />
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-container py-8">{children}</div>
    </>
  );
}
