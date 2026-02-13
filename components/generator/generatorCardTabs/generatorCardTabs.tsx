"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileSearch, FileStack, Palette, Settings } from "lucide-react";
import GeneratorCardSetup from "../generatorCardSetup/generatorCardSetup";
import CardPreview from "../cardPreview/cardPreview";
import { ComponentType, useState } from "react";
import GeneratorCardDesign from "../generatorCardDesign/generatorCardDesign";
import CardTemplates from "../cardTemplates/cardTemplates";
import { cn } from "@/lib/utils";

type GeneratorTabComponentProps = {
  onActiveTabChange?: (tabId: string) => void;
};

type TabConfig = {
  name: string;
  id: string;
  icon?: React.ElementType;
  component?: ComponentType<GeneratorTabComponentProps>;
  mobileOnly?: boolean;
};

const tabs: TabConfig[] = [
  {
    name: "Setup",
    id: "card-setup",
    icon: Settings,
    component: GeneratorCardSetup,
  },
  {
    name: "Design",
    id: "card-advance-style",
    icon: Palette,
    component: GeneratorCardDesign,
  },
  {
    name: "Templates",
    id: "card-templates",
    icon: FileStack,
    component: CardTemplates,
  },
  {
    name: "Preview",
    id: "card-preview",
    icon: FileSearch,
    component: CardPreview,
    mobileOnly: true,
  },
];

export default function GeneratorCardTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="h-full relative flex flex-col flex-auto overflow-hidden gap-0"
    >
      <TabsList className="border-b rounded-none rounded-t-md justify-start lg:justify-end lg:gap-0">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={cn(
                "lg:w-auto w-1/3",
                tab?.mobileOnly ? "lg:hidden" : "",
              )}
            >
              <TabsTrigger
                value={tab.id}
                size="small"
                className="flex items-center gap-2 lg:px-3 mx-auto py-3"
              >
                {tab.icon && <tab.icon />}
                {tab.name}
              </TabsTrigger>
            </div>
          );
        })}
      </TabsList>

      <div className="min-h-0 flex-1 overflow-hidden">
        {tabs.map((tab) => {
          return (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className={cn(
                tab.mobileOnly
                  ? "flex h-full min-h-0 flex-col lg:hidden"
                  : "h-full min-h-0 overflow-y-auto p-7",
              )}
            >
              {tab?.component ? (
                <tab.component onActiveTabChange={setActiveTab} />
              ) : (
                <div className="text-sm text-muted-foreground">
                  {tab?.name} Tab content
                </div>
              )}
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
