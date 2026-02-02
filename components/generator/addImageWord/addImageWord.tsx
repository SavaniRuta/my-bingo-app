"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import { ADD_WORDS_TABS, type AddImageWordTab } from "@/utils/dummy-data";
import { Badge } from "@/components/ui/badge";

export type { AddImageWordTab };
interface AddImageWordProps {
  tabs?: readonly AddImageWordTab[];
}

export const AddImageWord: React.FC<AddImageWordProps> = ({
  tabs = ADD_WORDS_TABS,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <Text variant="base" weight="semibold">
          Add words & images
        </Text>
        <Badge variant="outline">20</Badge>
      </div>

      <Tabs
        defaultValue={tabs[0]?.id}
        className="w-full border border-border bg-card rounded-lg shadow-sm"
      >
        <TabsList className="border-b rounded-none rounded-t-md bg-accent/40">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="lg:text-sm gap-1.5 lg:px-3"
              >
                {IconComponent && <IconComponent className="size-4" />}
                {tab.label}
              </TabsTrigger>
            );
          })}
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
