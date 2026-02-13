"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import BccLogo from "@/components/global/bccLogo/bccLogo";
import { Separator } from "@/components/ui/separator";
import { SITE_URLS } from "@/utils/const";
import {
  BellIcon,
  CreditCardIcon,
  Gauge,
  Search,
  SettingsIcon,
  TextAlignJustify,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateCardButton from "../createCardButton/createCardButton";
import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

type HeaderCallFrom = "dashboard" | "marketing" | "generator";

type HeaderProps = {
  callFrom?: HeaderCallFrom;
  className?: string;
};

const DASHBOARD_NAV_ITEMS = [
  {
    label: "Dashboard",
    href: SITE_URLS.dashboard,
  },
  {
    label: "My cards",
    href: SITE_URLS.my_cards,
  },
] as const;

type NavItem = {
  label: string;
  type: "trigger" | "link";
  href?: string;
  content?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Templates",
    type: "trigger",
    content: [
      {
        title: "Bingo Templates",
        description: "Browse our collection",
        href: "#",
      },
      {
        title: "Create Custom",
        description: "Create your own template.",
        href: "#",
      },
      {
        title: "Popular Templates",
        description: "See what others are using.",
        href: "#",
      },
    ],
  },
  {
    label: "Word finder",
    type: "trigger",
    content: [
      {
        title: "Word Search",
        description: "Find words in our database.",
        href: "#",
      },
      {
        title: "Word Lists",
        description: "Browse curated word lists.",
        href: "#",
      },
      {
        title: "Tools",
        description: "Utility tools for word finding.",
        href: "#",
      },
    ],
  },
  {
    label: "Blog",
    type: "link",
    href: "#",
  },
  {
    label: "Support",
    type: "link",
    href: "#",
  },
];

const NAV_ITEM_CLASS =
  "bg-transparent hover:bg-transparent data-[state=open]:!bg-transparent text-text font-semibold";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a ref={ref} className={cn(className)} {...props}>
        <div>{title}</div>
        <p>{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));

type CommandItemData = {
  label: string;
  shortcut: string;
  icon: React.ElementType;
};

const COMMAND_ITEMS: CommandItemData[] = [
  {
    label: "Profile",
    shortcut: "P",
    icon: UserIcon,
  },
  {
    label: "Billing",
    shortcut: "B",
    icon: CreditCardIcon,
  },
  {
    label: "Settings",
    shortcut: "S",
    icon: SettingsIcon,
  },
];

export function Header({ className, callFrom }: HeaderProps) {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const isTemplateSinglePage = pathname?.match(/^\/template\/[^/]+$/);

  return (
    <>
      <header
        className={cn(
          "w-full px-4 lg:px-8 py-3 sticky top-0 z-50 border-b border-border bg-white",
          callFrom === "marketing" && "bg-blue-50",
          isTemplateSinglePage && "bg-white py-4 border-none",
          className,
        )}
      >
        <div
          className={cn(
            "flex items-center flex-1 justify-between gap-x-4 lg:gap-x-8",
            callFrom === "marketing" && "template-container",
          )}
        >
          <BccLogo className={cn("flex", isTemplateSinglePage && "h-14")} />

          {callFrom === "marketing" ? (
            <>
              <div className="hidden lg:flex lg:items-center lg:gap-x-6">
                <NavigationMenu>
                  <NavigationMenuList>
                    {NAV_ITEMS.map((item) => (
                      <NavigationMenuItem key={item.label}>
                        {item.type === "trigger" ? (
                          <>
                            <NavigationMenuTrigger>
                              {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-100 md:w-125 md:grid-cols-1 lg:w-150">
                                {item.content?.map((contentItem) => (
                                  <ListItem
                                    key={contentItem.title}
                                    title={contentItem.title}
                                    href={contentItem.href}
                                  >
                                    {contentItem.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle({
                              // className: NAV_ITEM_CLASS,
                            })}
                          >
                            <Link href={item.href!}>{item.label}</Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}

                    <Button
                      variant="ghost"
                      className="text-gray-600"
                      onClick={() => setOpen(true)}
                    >
                      <Search />
                    </Button>
                    <CommandDialog
                      open={open}
                      onOpenChange={setOpen}
                      className="max-w-xl"
                    >
                      <Command>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Settings">
                            {COMMAND_ITEMS.map((item) => {
                              const Icon = item.icon;

                              return (
                                <CommandItem key={item.label}>
                                  <Icon className="size-4" />
                                  <span>{item.label}</span>
                                  <CommandShortcut>
                                    {item.shortcut}
                                  </CommandShortcut>
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </CommandDialog>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center lg:gap-6 gap-1">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    width={32}
                    height={32}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="hidden lg:block">
                  <CreateCardButton href={SITE_URLS.dashboard}>
                    Create Card
                  </CreateCardButton>
                </div>

                <Button
                  variant="ghost"
                  className="block lg:hidden text-gray-600 [&_svg:not([class*='size-'])]:size-6 has-[>svg]:px-2"
                  size="lg"
                >
                  <Search />
                </Button>
                <Button
                  variant="ghost"
                  className="block lg:hidden text-gray-600 [&_svg:not([class*='size-'])]:size-6 has-[>svg]:px-2"
                  size="lg"
                >
                  <TextAlignJustify />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-x-2 lg:gap-x-3">
              <div className="hidden lg:flex items-center">
                {DASHBOARD_NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Separator
                orientation="vertical"
                className="hidden data-[orientation=vertical]:h-5.5 lg:block"
              />

              <div className="shrink-0 flex items-center gap-2 lg:gap-3">
                <div className="flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Gauge />
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground relative"
                  >
                    <BellIcon className="relative" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                  </Button>
                </div>

                <CreateCardButton
                  href={SITE_URLS.dashboard}
                  variant="secondary"
                  className="hidden lg:flex"
                >
                  Create Card
                </CreateCardButton>

                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
