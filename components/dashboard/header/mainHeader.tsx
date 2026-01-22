"use client";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { BellDotIcon, Gauge } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";

export function MainHeader() {
  return (
    <header className="px-4 lg:px-8 py-3 sticky top-0 z-50 border-b border-border bg-white">
      <div>
        <div className="flex items-center flex-1 justify-between lg:justify-normal gap-x-4 lg:gap-x-8">
          <div className="w-64 lg:block hidden">
            <Image
              src="/images/bingo-logo.svg"
              alt="Bingo Logo"
              width={80}
              height={75}
            />
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-5">
            <Image
              src="/images/bingo-logo.svg"
              alt="Bingo Logo"
              width={70}
              height={37}
              className="flex lg:hidden"
            />
            <div className="shrink-0 bg-border w-px block h-5 lg:hidden"></div>
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
                  "text-muted-foreground",
                )}
              >
                Dashboard
              </Link>

              <Link
                href={SITE_URLS.my_cards}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              >
                My cards
              </Link>
            </div>

            <div className="shrink-0 bg-border w-px hidden h-6 lg:block"></div>

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
                  <BellDotIcon width={24} height={24} />
                </Button>
              </div>

              <Link
                href={SITE_URLS.dashboard}
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "hidden lg:flex") }
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
      </div>
    </header>
  );
}
