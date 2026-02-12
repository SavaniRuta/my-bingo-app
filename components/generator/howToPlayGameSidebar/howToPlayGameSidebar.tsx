"use client";
import { Text } from "@/components/global/text/text";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

type HowToPlayGameSidebarProps = {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export default function HowToPlayGameSidebar({
  open,
  onOpenChange,
  children,
}: HowToPlayGameSidebarProps) {
  const isMobile = useIsMobile();

  const Content = (
    <div className="flex h-full flex-col px-4 pt-4 lg:pt-6 lg:px-6 overflow-y-auto remove-scroll">
      <div className="space-y-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-6">
            <Text as="h2" variant="2xl" weight="semibold">
              Step 1 Initiate card creation
            </Text>
            <Text as="p" variant="lg" className="text-foreground">
              Navigate to the top right corner and click "Create a Card" to
              access the card builder.
            </Text>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {!isMobile ? (
        <Sheet>
          <SheetTrigger asChild>{children}</SheetTrigger>
          <SheetContent
            side="right"
            className="sm:max-w-md rounded-14 sm:top-2 sm:right-2 sm:bottom-2 gap-0 h-auto"
          >
            <SheetHeader className="p-0 sticky top-0 px-4 py-4 pb-0 lg:pt-8 lg:px-6">
              <SheetTitle className="font-recoleta text-left pb-2 border-b border-border w-full text-balance text-3xl font-bold">
                How do I create a bingo card?
              </SheetTitle>
            </SheetHeader>

            {Content}
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerContent className="lg:hidden outline-none border-none rounded-t-xl flex flex-col">
            <DrawerTitle className="font-recoleta text-left pb-2 border-b border-border w-full text-xl font-bold p-4">
              How do I create a bingo card?
            </DrawerTitle>
            {Content}
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
