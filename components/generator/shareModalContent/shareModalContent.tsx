"use client";
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AppWindow, Copy, Share } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const shareModalTabs = [
  {
    name: "Share",
    id: "share-link",
    icon: Share,
  },
  {
    name: "Embed",
    id: "embed-code",
    icon: AppWindow,
  },
];

export default function ShareModalContent({ isMobile }: { isMobile: boolean }) {
  const [isPublic, setIsPublic] = useState(false);
  const Header = isMobile ? DrawerHeader : DialogHeader;
  const Title = isMobile ? DrawerTitle : DialogTitle;
  const Description = isMobile ? DrawerDescription : DialogDescription;

  return (
    <>
      <Header className="p-0">
        <div className="flex flex-row items-center gap-2">
          <Title>Share your bingo card</Title>
          <Separator orientation="vertical" className="h-5 bg-border" />
          <div className="flex gap-2 items-center text-sm font-medium">
            <Text as="span" color="muted">Public</Text>
            <Switch
              checked={isPublic}
              onCheckedChange={setIsPublic}
              className="w-10 disabled:opacity-50"
            />
          </div>
        </div>
        <Description className="text-left">
          Publish your card as a template via a link, or embed a version that
          can be marked on your website.
        </Description>
      </Header>
      <Tabs defaultValue={shareModalTabs[0].id}>
        <TabsList className="grid w-full grid-cols-2 text-center p-0 lg:gap-0 border-b rounded-none rounded-t-md">
          {shareModalTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className={cn("text-base")}>
              <tab.icon />
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="share-link"
          className={cn(
            "mt-7 transition-opacity",
            isPublic ? "opacity-100" : "opacity-50",
          )}
        >
          <Text variant="sm" weight="medium" className="mb-2">
            Share as a template
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <Button variant="outline" size="lg">
              <Image
                src="/images/facebook-icon-blue.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
              Share on Facebook
            </Button>
            <Button variant="outline" size="lg">
              <Image
                src="/images/pintrest-icon-red.svg"
                alt="Pinterest"
                width={16}
                height={16}
              />
              Share on Pinterest
            </Button>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex-1 rounded-md px-3 py-2.5 ring-1 ring-input text-sm text-foreground line-clamp-1 truncate w-[400px] max-w-full">
              {
                "https://www.bingocardcreator.com/generator/?cloneid=87365&feature=shared"
              }
            </div>
            <Button variant="outline" size="icon-lg">
              <Copy />
            </Button>
          </div>

          <div className="relative my-4 flex items-center justify-center overflow-hidden">
            <Separator />
            <div className="py-1 px-2 border rounded text-center bg-card text-sm mx-1 text-card-foreground shadow-xs font-medium">
              OR
            </div>
            <Separator />
          </div>

          <Text variant="sm" weight="medium" className="mb-2">
            Share as a markable card
          </Text>
          <div className="flex items-center gap-2 justify-between mb-7">
            <div className="flex-1 rounded-md px-3 py-2.5 ring-1 ring-input text-sm text-foreground line-clamp-1 truncate w-100 max-w-full">
              {
                "https://www.bingocardcreator.com/generator/?cloneid=87365&feature=shared"
              }
            </div>
            <Button variant="outline" size="icon-lg">
              <Copy />
            </Button>
          </div>

          <Switch
            label="Show shuffle option"
            description="Enable this if you want users to be able to shuffle the card."
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
