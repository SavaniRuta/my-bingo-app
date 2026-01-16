"use client";
import Image from "next/image";
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
import { AppButton } from "@/components/appButton/appButton";
import bingoLogo from "@/public/images/bingo-logo.svg";
import avatarImg from "@/public/images/avatar-img.svg";
import searchIcon from "@/public/images/search-icon.svg";
import menuIcon from "@/public/images/menu-icon.svg";

const headerVariants = cva(
  "w-full", // base styles
  {
    variants: {
      variant: {
        default: "bg-white",
        blue: "bg-blue-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type HeaderProps = VariantProps<typeof headerVariants>;

export function Header({ variant }: HeaderProps) {
  return (
    <header className={cn(headerVariants({ variant }))}>
      <div className="py-3 lg:py-4">
        <div className="max-w-7xl mx-auto lg:px-6 px-4">
          <div className="flex justify-between items-center gap-x-6">
            <Link href="/" className="lg:w-auto lg:h-auto w-20 h-10">
              <Image src={bingoLogo} alt="Bingo Logo" width={105} height={56} />
            </Link>

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
                <AppButton type="button" variant="primary">
                  Create Card
                </AppButton>
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
  );
}
