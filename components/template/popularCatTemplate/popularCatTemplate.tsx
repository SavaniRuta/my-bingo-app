"use client";
import { Text } from "../../global/text/text";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { useRef } from "react";
import { POPULAR_CATEGORY_TEMPLATE } from "@/utils/dummy-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PopularCatCard from "./popularCatCard";

const tabs = [
  { name: "Popular", value: "popular" },
  { name: "New", value: "new" },
  { name: "English", value: "english" },
  { name: "Spanish", value: "spanish" },
  { name: "Geography", value: "geography" },
  { name: "History", value: "history" },
];

export default function PopularCatTemplate() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.clientWidth / 2;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6 lg:py-10">
    <div className="template-container">
        <div className="mb-2 flex justify-between items-center flex-wrap gap-2">
        <Text as="h2" variant="2xl" weight="semibold" color="gray_900">
            Popular templates by category
        </Text>
        <div className="lg:flex items-center gap-2 hidden">
            <Button
            variant="outline"
            size="icon-sm"
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="rounded-lg"
            >
            <ChevronLeft className="text-gray-600" />
            </Button>

            <Button
            variant="outline"
            size="icon-sm"
            onClick={() => scroll("right")}
            aria-label="Next"
            className="rounded-lg"
            >
            <ChevronRight className="text-gray-600" />
            </Button>
        </div>
        </div>
    </div>

    <div className="template-container">
        <Tabs className="w-full" defaultValue={tabs[0].value}>
        <TabsList className="w-full justify-start rounded-none border-b bg-background p-0">
            <div className="relative overflow-x-auto remove-scroll flex lg:gap-2">
            {tabs.map((tab) => (
                <TabsTrigger
                className="h-full rounded-none border-transparent border-b-2 bg-background data-[state=active]:border-primary data-[state=active]:shadow-none"
                key={tab.value}
                value={tab.value}
                >
                {tab.name}
                </TabsTrigger>
            ))}
            </div>
        </TabsList>

        {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
            <ul
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 py-4 remove-scroll"
            >
                {(POPULAR_CATEGORY_TEMPLATE[tab.value] ?? []).map((item) => (
                <li
                    key={item.id}
                    className="snap-start shrink-0 w-58 sm:w-[320px] lg:w-55"
                >
                    <PopularCatCard {...item} />
                </li>
                ))}
            </ul>
            </TabsContent>
        ))}
        </Tabs>
    </div>
    </section>
  );
}
