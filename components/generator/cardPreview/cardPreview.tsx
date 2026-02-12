"use client";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  MessageCircleQuestionMark,
  RotateCw,
  Share,
  Shuffle,
  Upload,
} from "lucide-react";
import CardPreviewImage from "@/public/images/card-preview-image.png";
import Image from "next/image";
import CardShareModal from "../cardShareModal/cardShareModal";
import HowToPlayGameSidebar from "../howToPlayGameSidebar/howToPlayGameSidebar";
import { useState } from "react";

export default function CardPreview() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isHowToPlaySidebarOpen, setIsHowToPlaySidebarOpen] = useState(false);

  return (
    <>
      <div className="sticky z-10 top-0 border-b border-border h-14 flex justify-between items-center py-3 px-5 mt-0.5 xl:px-8 bg-white lg:bg-transparent">
        <div className="flex items-center">
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="icon-xs">
              <ChevronLeft className="text-muted-foreground/70 size-4" />
            </Button>
            <Button variant="ghost" size="icon-xs">
              <ChevronRight className="text-muted-foreground/70 size-4" />
            </Button>
          </div>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4 bg-border mx-4"
          />
          <div className="flex gap-1.5 items-center">
            <Check className="text-muted-foreground/70 size-4" />
            <Text as="span" variant="xs" className="text-muted-foreground/70">
              Saved
            </Text>
          </div>
        </div>

        <div className="hidden gap-1.5 lg:flex">
          <Button variant="ghost">
            <Shuffle />
            Shuffle
          </Button>
          <Button variant="ghost">
            <RotateCw />
            Start again
          </Button>

          <HowToPlayGameSidebar
            open={isHowToPlaySidebarOpen}
            onOpenChange={setIsHowToPlaySidebarOpen}
          >
            <Button variant="ghost" type="button">
              <MessageCircleQuestionMark />
              How it works
            </Button>
          </HowToPlayGameSidebar>

          <CardShareModal open={isShareModalOpen}>
            <Button type="button" variant="outline">
              <Share />
              Share
            </Button>
          </CardShareModal>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon-sm" className="flex lg:hidden">
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-48">
            <DropdownMenuItem>
              <Shuffle />
              Shuffle
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RotateCw />
              Start again
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsHowToPlaySidebarOpen(true)}>
              <MessageCircleQuestionMark />
              How it works
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsShareModalOpen(true)}>
              <Upload />
              Share
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-y-auto">
        <div className="min-h-0 p-8 h-full relative flex items-center justify-center">
          <div className="size-full relative">
            <Image
              src={CardPreviewImage}
              alt="Card Preview"
              className="object-contain size-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
