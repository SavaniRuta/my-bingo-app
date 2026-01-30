"use client";
import { Text } from "@/components/global/text/text";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RefObject, useCallback, useEffect, useState } from "react";

type SliderButtonProps = {
  title: string;
  sliderRef: RefObject<HTMLUListElement | null>;
  watchKey?: string;
};

export default function SliderButton({
  title,
  sliderRef,
  watchKey,
}: SliderButtonProps) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const element = sliderRef.current;
    if (!element) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    setCanLeft(element.scrollLeft > 1);
    setCanRight(element.scrollLeft < maxScrollLeft - 1);
  }, [sliderRef]);

  const scroll = (dir: "left" | "right") => {
    const element = sliderRef.current;
    if (!element) return;

    element.scrollBy({
      left: dir === "left" ? -element.clientWidth : element.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const element = sliderRef.current;
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollTo({ left: 0 });
      update();
    });

    element.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [watchKey, update]);

  return (
    <div className="mb-2 flex justify-between items-center flex-wrap gap-2">
      <Text as="h2" variant="2xl" weight="semibold" color="gray-900">
        {title}
      </Text>
      <div className="lg:flex items-center gap-2 hidden">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="rounded-lg"
          disabled={!canLeft}
        >
          <ChevronLeft className="text-gray-600" />
        </Button>

        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => scroll("right")}
          aria-label="Next"
          className="rounded-lg"
          disabled={!canRight}
        >
          <ChevronRight className="text-gray-600" />
        </Button>
      </div>
    </div>
  );
}
