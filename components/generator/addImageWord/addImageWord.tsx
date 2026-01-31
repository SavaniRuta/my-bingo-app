"use client";

import React, { useState } from "react";
import { Type, Image, Sparkles, Smile } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import { ADD_WORDS_TABS } from "@/utils/dummy-data";
import { Badge } from "@/components/ui/badge";

// type IconType = "type" | "image" | "sparkles" | "smile";

export interface AddImageWordTab {
  id: string;
  label: string;
  //   iconType: IconType;
  content: string;
}

interface AddImageWordProps {
  tabs?: readonly AddImageWordTab[];
}

// const iconMap: Record<IconType, React.ReactNode> = {
//   type: <Type className="size-4" />,
//   image: <Image className="size-4" />,
//   sparkles: <Sparkles className="size-4" />,
//   smile: <Smile className="size-4" />,
// };

export const AddImageWord: React.FC<AddImageWordProps> = ({
  tabs = ADD_WORDS_TABS,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <Text variant="lg" weight="semibold">
          Add words & images
        </Text>
        <div className="text-sm text-muted-foreground font-medium">
          <Badge variant="outline">20</Badge>
        </div>
      </div>

      <Tabs
        defaultValue={tabs[0]?.id}
        className="w-full border border-border bg-card gap-0 rounded-lg shadow-sm"
      >
        <TabsList variant="line" className="border-b">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
              {/* {iconMap[tab.iconType]} */}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <div className="p-4">{tab.label}</div>

            <div className="flex items-center justify-between py-2 px-4 border-t">
              <Text variant="sm" color="muted">
                0 words
              </Text>

              <div className="flex gap-2">
                <Button variant="outline">Clear all</Button>
                <Button variant="default">+ Add to card</Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
