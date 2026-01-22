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
import { SITE_URLS } from "@/utils/const";
import { ChartLine, EllipsisVertical, Funnel, Search, User, CreditCard, Blend, SwatchBook } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  pathname: string;
};

export function Header({ pathname }: HeaderProps) {
  let title = "";
  let description: string | undefined;

  switch (true) {
    case pathname === "/dashboard":
      title = "Dashboard";
      description = "An overview of your recent account activity.";
      break;

    case pathname === "/dashboard/my-cards":
      title = "My cards";
      description =
        "Edit, publish, share, print or play online with all the cards you’ve created.";
      break;

    case pathname === "/dashboard/games":
      title = "Active games";
      description = "Manage your active games.";
      break;

    case pathname === "/dashboard/empty-dashboard":
      title = "Dashboard";
      description = "An overview of your recent account activity.";
      break;

    case pathname === "/dashboard/changelog":
      title = "What’s new";
      description = "New updates and announcements from Bingo Card Creator.";
      break;

    case pathname === "/dashboard/account":
    case pathname === "/dashboard/billing":
    case pathname === "/dashboard/integrations":
    case pathname === "/dashboard/appearance":
      title = "Settings";
      description = "Manage your account settings.";
      break;

    case pathname === "/dashboard/orders":
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
          {/* Breadcrubs */}
          {/* <div>
            <p>Breadcrubs</p>
          </div> */}

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="font-recoleta text-3xl font-bold">{title}</h1>
                {(pathname === "/dashboard/my-cards" ||
                  pathname === "/dashboard/games" ||
                  pathname === "/dashboard/orders") && (
                  <Badge variant="secondary">
                    {pathname === "/dashboard/my-cards" && "21 cards"}
                    {pathname === "/dashboard/games" && "21 games"}
                    {pathname === "/dashboard/orders" && "21 orders"}
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
              {pathname === "/dashboard" && (
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

              {pathname === "/dashboard/my-cards" && (
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

              {pathname === "/dashboard/games" && (
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

            {pathname === "/dashboard/account"  && (
              <>
                <div className="lg:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={SITE_URLS.account} className="cursor-pointer">
                          <User className="size-4" />
                          Account
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={SITE_URLS.billing} className="cursor-pointer">
                          <CreditCard className="size-4" />
                          Billing
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={SITE_URLS.integrations} className="cursor-pointer">
                          <Blend className="size-4" />
                          Integrations
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={SITE_URLS.appearance} className="cursor-pointer">
                          <SwatchBook className="size-4" />
                          Appearance
                        </Link>
                      </DropdownMenuItem>
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
