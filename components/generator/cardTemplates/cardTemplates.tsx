import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircleUserRound,
  File,
  FileStack,
  FileText,
  Search,
} from "lucide-react";
import CardTemplateData from "../cardTemplateData/cardTemplateData";

export default function CardTemplates() {
  const tabItems = [
    {
      value: "styles",
      label: "Styles",
      icon: <File />,
    },
    { value: "pre-filled", label: "Pre-filled", icon: <FileText /> },
    { value: "my-cards", label: "My cards", icon: <CircleUserRound /> },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="mb-4">
        <Text
          as="p"
          variant="base"
          weight="semibold"
          className="mb-0.5 flex items-center gap-2"
        >
          <FileStack className="size-4.5 text-primary stroke-2.5" />
          Templates
        </Text>
        <Text as="p" variant="sm" color="muted">
          Styles change card appearance; or choose pre-filled cards.
        </Text>
      </div>

      <Tabs defaultValue="styles" className="min-h-0 gap-0">
        {/* <div className="flex-none"> */}
          <div className="flex items-center justify-between">
            <TabsList className="w-auto rounded-10 border border-border p-1 lg:gap-0">
              {tabItems.map((tabItem) => (
                <TabsTrigger
                  key={tabItem.value}
                  variant="tab-border"
                  value={tabItem.value}
                  size="small"
                  className="py-1 font-medium"
                >
                  {tabItem?.icon}
                  {tabItem?.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="ghost" size="icon">
              <Search className="text-muted-foreground" />
            </Button>
          </div>

          <Separator className="my-3" />
        {/* </div> */}

        {tabItems.map((tabItem) => {
          return (
            <TabsContent
              key={tabItem.value}
              value={tabItem.value}
              className="overflow-hidden"
            >
              <CardTemplateData tabItem={tabItem} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
