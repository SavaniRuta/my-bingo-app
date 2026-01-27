"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import avatarImg from "@/public/images/avatar-img.svg";
import searchIcon from "@/public/images/search-icon.svg";
import menuIcon from "@/public/images/menu-icon.svg";
import BccLogo from "@/components/global/bccLogo/bccLogo";
import { Separator } from "@/components/ui/separator";
import { SITE_URLS } from "@/utils/const";
import { BellIcon, Gauge } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const headerVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-white",
      blue: "bg-blue-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type HeaderCallFrom = "dashboard" | "template";

type HeaderProps = VariantProps<typeof headerVariants> & {
  callFrom?: HeaderCallFrom;
  className?: string;
};

export function Header({
  variant,
  callFrom = "template",
  className,
}: HeaderProps) {
  const pathname = usePathname();
  const isDashboard = callFrom === "dashboard";
  const isTemplate = callFrom === "template";

  return (
    <>
      {isTemplate && (
        <header className={cn(headerVariants({ variant }))}>
          <div className="py-3 lg:py-4">
            <div className="max-w-7xl mx-auto lg:px-6 px-4">
              <div className="flex justify-between items-center gap-x-6">
                <BccLogo className="lg:w-auto lg:h-auto w-20 h-10" />

                <div className="hidden lg:flex lg:items-center lg:gap-x-6">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:!bg-transparent text-text font-semibold">
                          Templates
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:!bg-transparent text-text font-semibold">
                          Word finder
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link
                          href="#"
                          className={navigationMenuTriggerStyle({
                            className:
                              "bg-transparent hover:bg-transparent data-[state=open]:!bg-transparent text-text font-semibold",
                          })}
                        >
                          Blog
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link
                          href="#"
                          className={navigationMenuTriggerStyle({
                            className:
                              "bg-transparent hover:bg-transparent data-[state=open]:!bg-transparent text-text font-semibold",
                          })}
                        >
                          Support
                        </Link>
                      </NavigationMenuItem>

                      <Image src={searchIcon} alt="Search Icon" />
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>

                <div className="flex items-center lg:gap-6 gap-4">
                  <div>
                    <Image src={avatarImg} alt="User Avatar Image" />
                  </div>

                  <div className="hidden lg:block">
                    <Button type="button">Create Card</Button>
                  </div>

                  <div className="block lg:hidden">
                    <Image src={searchIcon} alt="Search Icon" />
                  </div>

                  <div className="block lg:hidden">
                    <Image src={menuIcon} alt="Menu Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      {isDashboard && (
        <header className="px-4 lg:px-8 py-3 sticky top-0 z-50 border-b border-border bg-white">
          <div className="flex items-center flex-1 justify-between lg:justify-normal gap-x-4 lg:gap-x-8">
            <BccLogo className="hidden lg:flex" />
            <div className="flex items-center gap-x-4 lg:gap-x-5">
              <BccLogo className="flex lg:hidden w-17" />

              <Separator
                orientation="vertical"
                className="block data-[orientation=vertical]:h-5.5 lg:hidden"
              />

              <Button variant="secondary" size="sm" className="block lg:hidden">
                Create card
              </Button>
            </div>

            <div className="flex items-center gap-x-2 lg:gap-x-3 lg:ml-auto">
              <div className="hidden lg:flex items-center">
                <Link
                  href={SITE_URLS.dashboard}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    pathname === SITE_URLS.dashboard ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  Dashboard
                </Link>

                <Link
                  href={SITE_URLS.my_cards}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    pathname === SITE_URLS.my_cards ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  My cards
                </Link>
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
                    <Gauge width={24} height={24} />
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <BellIcon width={24} height={24} />
                  </Button>
                </div>

                <Link
                  href={SITE_URLS.dashboard}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "hidden lg:flex",
                  )}
                >
                  Create card
                </Link>

                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
