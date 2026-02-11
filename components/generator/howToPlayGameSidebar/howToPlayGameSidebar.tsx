"use client";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";

type HowToPlayGameSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function HowToPlayGameSidebar({
  open,
  onOpenChange,
}: HowToPlayGameSidebarProps) {
  const isMobile = useIsMobile();

  return (
    <Drawer
      direction={isMobile ? "bottom" : "right"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <DrawerContent
        className={`data-[vaul-drawer-direction=right]:sm:max-w-md rounded-14 data-[vaul-drawer-direction=right]:right-2 data-[vaul-drawer-direction=right]:top-2 data-[vaul-drawer-direction=right]:bottom-2 ${isMobile ? "rounded-none rounded-t-xl" : ""}`}
      >
        <DrawerHeader className="p-0">
          <div className="sticky top-0 z-10 px-4 py-4 pb-0 sm:pt-8 sm:px-6">
            <DrawerClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="hidden lg:inline-flex absolute top-3 right-3"
                aria-label="Close sidebar"
              >
                <X className="size-4" />
              </Button>
            </DrawerClose>
            <DrawerTitle className="font-recoleta font-bold text-left text-foreground text-balance text-xl lg:text-3xl pb-2 border-b border-border">
              How do I create a bingo card?
            </DrawerTitle>
          </div>
        </DrawerHeader>
        <div className="flex h-full flex-col px-4 pt-4 sm:pt-6 sm:px-6 overflow-y-auto remove-scroll">
          <div className="space-y-8">
            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>

            <div className="space-y-6">
              <Text as="h2" variant="2xl" weight="semibold">
                Step 1: Initiate card creation
              </Text>
              <Text
                as="p"
                variant="lg"
                color="muted"
                className="text-foreground"
              >
                Navigate to the top right corner and click 'Create a Card' to
                access the
              </Text>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
