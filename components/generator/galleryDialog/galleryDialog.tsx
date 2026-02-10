import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-137.5 w-full max-h-118.75 h-full">
        <DialogHeader>
          <DialogTitle className="hidden">Test</DialogTitle>
          <Tabs
            defaultValue={tabs[0].id}
            className="h-full relative flex flex-col flex-auto overflow-hidden gap-0"
          >
            <TabsList className="border-b rounded-none rounded-t-md lg:gap-0 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;

                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    size="small"
                    className="flex items-center gap-2 lg:px-3"
                  >
                    {IconComponent && <IconComponent />}
                    {tab.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div className="flex-1 overflow-auto">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-5 h-full"
                >
                  {tab.render?.()}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
