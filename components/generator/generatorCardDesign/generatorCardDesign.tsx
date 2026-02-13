"use client";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Captions, FileType, Grid3x3, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import type { ElementType, ReactElement } from "react";
import DesignCardTitle from "../designCardTitle/designCardTitle";

type DesignAccordionItem = {
  id: string;
  title?: string;
  description?: string;
  icon?: ElementType | ReactElement;
  component?: ElementType;
};

type GeneratorCardDesignProps = {
  onActiveTabChange?: (tabId: string) => void;
};

const DESIGN_ACCORDION_ITEMS: readonly DesignAccordionItem[] = [
  {
    id: "card-title",
    title: "Card title",
    description: "Customize font style, color, and alignment of the title.",
    icon: FileType,
    component: DesignCardTitle,
  },
  {
    id: "card-background",
    title: "Card background",
    description: "Adjust background color/image and border style/thickness",
    icon: ImageIcon,
  },
  {
    id: "grid-styles",
    title: "Grid styles",
    description: "Set the grid shape, spacing and font type/size",
    icon: Grid3x3,
  },
  {
    id: "caption-styles",
    title: "Caption styles",
    description: "Set the style and font type/size",
    icon: Captions,
  },
  {
    id: "header-background",
    title: "Header background",
    description: "Add an image or choose a background color for the header.",
    icon: (
      <Image
        src="/images/coulmn-header-icon.svg"
        alt="Header background icon"
        width={16}
        height={16}
      />
    ),
  },
] as const;

export default function GeneratorCardDesign({
  onActiveTabChange,
}: GeneratorCardDesignProps) {
  return (
    <div className="space-y-9">
      <Text as="p" variant="sm" className="mb-2" weight="medium">
        Choose a template
      </Text>
      <div className="px-3 pt-3 relative rounded-xl bg-accent/30 border border-border overflow-hidden sm:pt-4 sm:px-6">
        <div className="relative z-10 flex flex-col gap-3 sm:gap-6 xl:flex-row">
          <div className="flex shrink-0 items-end">
            <div className="overflow-hidden ring-1 rounded-t-lg ring-white transition-all hover:ring-2 z-10">
              <Image
                src="/images/meet-greet-card.png"
                alt="Wavey template"
                width={136}
                height={117}
                className="block h-29 w-34 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="pb-3 sm:pb-4 flex flex-wrap sm:flex-nowrap gap-3 w-full justify-between items-center">
            <div>
              <Text as="p" variant="base" weight="semibold" color="card">
                Wavey
              </Text>
              <Text as="p" variant="sm" color="muted">
                Use a template to create amazing cards quickly.
              </Text>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => onActiveTabChange?.("card-templates")}
            >
              Open
            </Button>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible>
        {DESIGN_ACCORDION_ITEMS.map((item) => {

          return (
            <AccordionItem
              key={item?.id}
              value={item?.id}
              className="py-6 flex-1 border-b border-border first:pt-0 last:border-b rounded-none"
            >
              <AccordionTrigger
                variant="minimal"
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="p-0"
              />
              <AccordionContent className="p-0">
                {item?.component ? <item.component /> : "Test content"}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
