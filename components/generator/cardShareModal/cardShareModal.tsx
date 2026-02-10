"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Share } from "lucide-react";
import { useState } from "react";
import ShareModalContent from "../shareModalContent/shareModalContent";

type CardShareModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showDesktopTrigger?: boolean;
};

export default function CardShareModal({
  open,
  onOpenChange,
  showDesktopTrigger = true,
}: CardShareModalProps) {
  const isMobile = useIsMobile();
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;

  const handleOpenChange = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  return (
    <>
      {!isMobile ? (
        <>
          {showDesktopTrigger ? (
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={() => handleOpenChange(true)}
            >
              <Share />
              Share
            </Button>
          ) : null}
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTitle className="hidden">Test</DialogTitle>
            <DialogContent className="max-h-20vh max-w-125 overflow-y-auto remove-scroll">
              <ShareModalContent isMobile={isMobile} />
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerContent className="lg:hidden outline-none border-none rounded-t-xl flex flex-col">
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar space-y-4">
              <ShareModalContent isMobile={isMobile} />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
