"use client";
import { useRef, useState } from "react";
import { POPULAR_CATEGORY_TEMPLATE } from "@/utils/dummy-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PopularCard from "./popularCard";
import SliderButton from "../sliderButton/sliderButton";

const tabs = [
  { name: "Popular", value: "popular" },
  { name: "New", value: "new" },
  { name: "English", value: "english" },
  { name: "Spanish", value: "spanish" },
  { name: "Geography", value: "geography" },
  { name: "History", value: "history" },
];

export default function PopularTemplate() {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const sliderRef = useRef<HTMLUListElement>(null);

  return (
    <section className="py-6 lg:py-10">
      <div className="template-container">
        <SliderButton
          title="Popular templates by category"
          sliderRef={sliderRef}
          watchKey={activeTab}
        />
      </div>

      <div className="template-container">
        <Tabs
          className="w-full"
          defaultValue={tabs[0].value}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="w-full justify-start rounded-none border-b bg-background p-0">
            <div className="relative overflow-x-auto remove-scroll flex lg:gap-2">
              {tabs.map((tab) => (
                <TabsTrigger
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
                    className="snap-start shrink-0 w-58 sm:w-80 lg:w-55"
                  >
                    <PopularCard {...item} />
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
