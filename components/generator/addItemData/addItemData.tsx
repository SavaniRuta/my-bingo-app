"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronLeft,
  EllipsisVertical,
  Globe,
  Printer,
  Search,
} from "lucide-react";
import { AddImageWord } from "../addImageWord/addImageWord";
import { ADD_WORDS_TABS } from "@/utils/dummy-data";
import { Separator } from "@/components/ui/separator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { id: 1, image: "/images/template-card.jpg" },
  { id: 2, image: "/images/template-card.jpg" },
  { id: 3, image: "/images/template-card.jpg" },
  { id: 4, image: "/images/template-card.jpg" },
  { id: 5, image: "/images/template-card.jpg" },
  { id: 6, image: "/images/template-card.jpg" },
  { id: 7, image: "/images/template-card.jpg" },
  { id: 8, image: "/images/template-card.jpg" },
];

export default function AddItemData({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  const Content = (
    <>
      <div className="flex h-full min-h-0 flex-col">
        <div className="p-7 overflow-y-auto">
          <AddImageWord tabs={ADD_WORDS_TABS} />
          <Separator className="my-7 bg-border" />

          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-between">
              <InputGroup className="h-10">
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search" type="text" />
              </InputGroup>
              <Button variant="outline" size="lg" className="size-10">
                <EllipsisVertical />
              </Button>
            </div>

            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4">
              {items.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={`Item ${item.id}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card flex w-full flex-none items-center gap-3 border-t border-border px-7 py-3 rounded-b-lg">
        <Button variant="outline" size="lg" className="w-1/2">
          <Globe />
          Play online
        </Button>
        <Button size="lg" className="w-1/2">
          <Printer />
          Print cards
        </Button>
      </div>
    </>
  );

  return (
    <>
      {!isMobile ? (
        <Sheet>
          <SheetTrigger asChild>{children}</SheetTrigger>
          <SheetContent
            side="left"
            hideClose
            showOverlay={false}
            className="w-full sm:max-w-xl rounded-lg p-0 sm:top-20 sm:left-3 sm:bottom-3 h-auto lg:w-md xl:w-137 2xl:w-150 lg:min-w-md xl:min-w-137 2xl:min-w-150 gap-0"
          >
            <SheetHeader className="flex-col sm:text-left space-y-0 justify-center items-start text-left border-b border-border h-14 flex px-4 xl:px-7">
              <SheetClose asChild>
                <div className="flex items-center gap-2">
                  <ChevronLeft className="size-4 text-primary" />
                  <SheetTitle className="cursor-pointer text-base text-primary font-medium">
                    Back to setup
                  </SheetTitle>
                </div>
              </SheetClose>
            </SheetHeader>

            {Content}
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>{children}</DrawerTrigger>
          <DrawerContent className="rounded-t-2xl">
            <DrawerHeader className="border-b border-border px-4">
              <DrawerClose asChild>
                <div className="flex items-center gap-2">
                  <ChevronLeft className="size-4 text-primary" />
                  <DrawerTitle className="cursor-pointer text-base text-primary font-medium">
                    Back to setup
                  </DrawerTitle>
                </div>
              </DrawerClose>
            </DrawerHeader>

            {Content}
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
