"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Image, Images } from "lucide-react";
import dynamic from "next/dynamic";

const ImageDropzone = dynamic(
  () => import("../imageDropzone/imageDropzone").then((m) => m.ImageDropzone),
  { ssr: false },
);

type TabConfig = {
  name: string;
  id: string;
  icon?: React.ElementType;
  render?: () => React.ReactNode;
};

const tabs: TabConfig[] = [
  {
    name: "Upload",
    id: "upload",
    icon: Image,
    render: () => (
      <ImageDropzone
        title="Click to upload or drag and drop"
        description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
        orientation="vertical"
        showGallery={false}
        className="justify-center h-full"
      />
    ),
  },
  {
    name: "Gallery",
    id: "gallery",
    icon: Images,
    render: () => <p>Gallery Items</p>,
  },
];

interface GalleryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GalleryDialog({ open, onOpenChange }: GalleryDialogProps) {
  const isMobile = useIsMobile();

  const TabsUI = (
    <Tabs
      defaultValue={tabs[0].id}
      className="h-full flex flex-col overflow-hidden"
    >
      <TabsList className="border-b rounded-none px-6">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            size="small"
            className="flex items-center gap-2"
          >
            {tab.icon && <tab.icon />}
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex-1 overflow-auto">
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="px-6 py-5 h-full">
            {tab.render?.()}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );

  return (
    <>
      {!isMobile ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="p-0 max-w-137 w-full max-h-119 h-full gap-0 flex flex-col">
            <DialogHeader className="p-0">
              <DialogTitle className="hidden">Gallery</DialogTitle>
            </DialogHeader>
            {TabsUI}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerContent className="p-0 flex flex-col">
            <DrawerHeader className="p-0">
              <DrawerTitle className="hidden">Gallery</DrawerTitle>
            </DrawerHeader>
            {TabsUI}
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
