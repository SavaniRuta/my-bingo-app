import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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
  Search,
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
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type DashboardHeaderProps = {
  pathname: string;
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

export function DashboardHeader({ pathname }: DashboardHeaderProps) {
  let title = "";
  let description: string | undefined;

  // Changelod detail slug
  const changelogDetailMatch = pathname.match(
    new RegExp(`^${SITE_URLS.changelog}/(.+)$`),
  );
  const isChangelogDetail = !!changelogDetailMatch;
  const changelogSlug = changelogDetailMatch?.[1];

  switch (true) {
    case pathname === SITE_URLS.dashboard:
      title = "Dashboard";
      description = "An overview of your recent account activity.";
      break;

    case pathname === SITE_URLS.my_cards:
      title = "My cards";
      description =
        "Edit, publish, share, print or play online with all the cards you’ve created.";
      break;

    case pathname === SITE_URLS.games:
      title = "Active games";
      description = "Manage your active games.";
      break;

    case pathname === SITE_URLS.empty_dashboard:
      title = "Dashboard";
      description = "An overview of your recent account activity.";
      break;

    case pathname === SITE_URLS.changelog:
      title = "What’s new";
      description = "New updates and announcements from Bingo Card Creator.";
      break;

    case isChangelogDetail:
      title = changelogSlug ? formatSlugToTitle(changelogSlug) : "Changelog";
      break;

    case pathname === SITE_URLS.account:
    case pathname === SITE_URLS.billing:
    case pathname === SITE_URLS.integrations:
    case pathname === SITE_URLS.appearance:
      title = "Settings";
      description = "Manage your account settings.";
      break;

    case pathname === SITE_URLS.orders:
      title = "Orders";
      description = "View your bingo card delivery order history.";
      break;

    default:
      title = "Dashboard";
  }

  return (
    <div className="overflow-y-auto lg:pl-0 flex-auto">
      <div className="bg-card border-b border-border py-5 lg:py-7 shadow-xs">
        <div className="dashboard-container">

          {pathname !== SITE_URLS.dashboard && (
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
                  <BreadcrumbLink href={SITE_URLS.dashboard}>
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="font-recoleta text-3xl font-bold">{title}</h1>
                {(pathname === SITE_URLS.my_cards ||
                  pathname === SITE_URLS.games ||
                  pathname === SITE_URLS.orders) && (
                  <Badge variant="secondary">
                    {pathname === SITE_URLS.my_cards && "21 cards"}
                    {pathname === SITE_URLS.games && "21 games"}
                    {pathname === SITE_URLS.orders && "21 orders"}
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
              {pathname === SITE_URLS.dashboard && (
                <>
                  <InputGroup>
                    <InputGroupAddon>
                      <Search className="text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="text"
                      placeholder="search"
                      className="border-0 focus-visible:ring-0 shadow-none"
                    />
                  </InputGroup>

                  <Link
                    href={SITE_URLS.dashboard}
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    <ChartLine />
                  </Link>
                </>
              )}

              {pathname === SITE_URLS.my_cards && (
                <>
                  <InputGroup>
                    <InputGroupAddon>
                      <Search className="text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="text"
                      placeholder="search"
                      className="border-0 focus-visible:ring-0 shadow-none"
                    />
                  </InputGroup>

                  <Button variant="outline">
                    <Funnel />
                  </Button>

                  <Button variant="outline">
                    <ChartLine />
                  </Button>

                  <Button variant="destructive" disabled>
                    Delete
                  </Button>
                </>
              )}

              {pathname === SITE_URLS.games && (
                <>
                  <InputGroup>
                    <InputGroupAddon>
                      <Search className="text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="text"
                      placeholder="search"
                      className="border-0 focus-visible:ring-0 shadow-none"
                    />
                  </InputGroup>

                  <Link
                    href={SITE_URLS.dashboard}
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    Start new game
                  </Link>
                </>
              )}
            </div>

            {SETTINGS_ROUTES.some((route) => pathname.startsWith(route)) && (
              <>
                <div className="lg:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {DROPDOWN_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname.startsWith(item.href);

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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
