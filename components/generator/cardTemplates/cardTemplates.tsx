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
    <>
      <div className="mb-4">
        <Text
          as="p"
          variant="base"
          weight="semibold"
          className="flex items-center gap-2 mb-0.5"
        >
          <FileStack className="size-4.5 text-primary stroke-2.5" />
          Templates
        </Text>
        <Text as="p" variant="sm" color="muted">
          Styles change card appearance; or choose pre-filled cards.
        </Text>
      </div>

      <Tabs defaultValue="styles">
        <div className="flex justify-between items-center">
          <TabsList className="lg:gap-0 border p-1 border-border rounded-10 w-auto">
            {tabItems.map((tabItem) => (
              <TabsTrigger
                key={tabItem.value}
                variant="tab-border"
                value={tabItem.value}
                size="small"
                className="font-medium"
              >
                {tabItem.icon}
                {tabItem.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="ghost" size="icon">
            <Search className="text-muted-foreground" />
          </Button>
        </div>

        <Separator className="my-3" />
        {tabItems.map((tabItem) => {
          return (
            <TabsContent key={tabItem.value} value={tabItem.value}>
              <CardTemplateData tabItem={tabItem} />
            </TabsContent>
          );
        })}
      </Tabs>
    </>
  );
}
