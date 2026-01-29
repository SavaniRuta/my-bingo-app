"use client";
import { Text } from "../../global/text/text";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { useEffect, useRef, useState } from "react";
import TrendingTemplateCard from "./TrendingTemplateCard";
import { TRENDING_TEMPLATES } from "@/utils/dummy-data";

export default function TrendingTemplate() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.clientWidth / 2;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateScrollButtons();

    slider.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      slider.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <section className="py-6 lg:py-10">
      <div className="template-container">
        <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
          <Text as="h2" variant="2xl" weight="semibold" color="gray_900">
            Trending bingo templates
          </Text>
          <div className="lg:flex items-center gap-2 hidden">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="rounded-lg"
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="text-gray-600" />
            </Button>

            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => scroll("right")}
              aria-label="Next"
              className="rounded-lg"
              disabled={!canScrollRight}
            >
              <ChevronRight className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto md:px-6 md:max-w-7xl">
        <ul
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory px-2 xl:px-0 xl:-mx-4 remove-scroll md:-mx-4 md:px-2"
        >
          {TRENDING_TEMPLATES.map((item) => (
            <li
              key={item.id}
              className="snap-start shrink-0 px-4 w-[85%] md:w-[60%] lg:w-1/2"
            >
              <TrendingTemplateCard
                category={item.category}
                title={item.title}
                description={item.description}
                icon={item.icon}
                image={item.image}
                href={item.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
