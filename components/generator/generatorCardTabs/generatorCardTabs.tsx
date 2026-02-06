import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileSearch, FileStack, Palette, Settings } from "lucide-react";
import GeneratorCardSetup from "../generatorCardSetup/generatorCardSetup";
import { ComponentType } from "react";



type TabConfig = {
  name: string;
  id: string;
  icon?: React.ElementType;
  component?: ComponentType;
}

const tabs: TabConfig[] = [
  {
    name: "Setup",
    id: "card-setup",
    icon: Settings,
    component: GeneratorCardSetup
  },
  {
    name: "Design",
    id: "card-advance-style",
    icon: Palette,
  },
  {
    name: "Templates",
    id: "card-templates",
    icon: FileStack,
  },
  {
    name: "Preview",
    id: "card-preview",
    icon: FileSearch,
  },
];

export default function GeneratorCardTabs() {
  return (
    <Tabs
      defaultValue={tabs[0].id}
      className="h-full relative flex flex-col flex-auto overflow-hidden gap-0"
    >
      <TabsList className="border-b rounded-none rounded-t-md justify-end lg:gap-0">
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
        {tabs.map((tab) => {
          const TabComponent = tab.component;

          return (
            <TabsContent key={tab.id} value={tab.id} className="p-7">
              {TabComponent ? (
                <TabComponent />
              ) : (
                <div className="text-sm text-muted-foreground">
                  {tab.name} Tab content
                </div>
              )}
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
