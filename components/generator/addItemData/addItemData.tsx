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
import { ChevronLeft, Globe, Printer } from "lucide-react";
import { AddImageWord } from "../addImageWord/addImageWord";
import { ADD_WORDS_TABS } from "@/utils/dummy-data";

export default function AddItemData({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="left"
        hideClose={true}
        showOverlay={false}
        className="w-full sm:max-w-xl rounded-lg p-0 sm:top-[77px] sm:left-3 sm:bottom-3 h-auto lg:w-112.5 xl:w-137 2xl:w-150 gap-0"
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

        <div className="flex h-full min-h-0 flex-col">
          <div className="p-7 overflow-y-auto">
            <AddImageWord tabs={ADD_WORDS_TABS} />
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
      </SheetContent>
    </Sheet>
  );
}
