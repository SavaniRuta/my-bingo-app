import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import ShareModalContent from "../shareModalContent/shareModalContent";

type CardShareModalProps = {
  open?: boolean;
  children: React.ReactNode;
};

export default function CardShareModal({
  open,
  children,
}: CardShareModalProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <>
          <Dialog>
            <DialogTrigger asChild>
              {children}
            </DialogTrigger>
            <DialogTitle className="sr-only">Test</DialogTitle>
            <DialogContent className="max-h-20vh max-w-125 overflow-y-auto remove-scroll">
              <ShareModalContent isMobile={isMobile} />
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Drawer open={open}>
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
