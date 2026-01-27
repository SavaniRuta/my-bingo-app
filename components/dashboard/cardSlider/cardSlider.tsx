"use client";
import Link from "next/link";
import { useRef } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardSliderProps<T> = {
  //   title: string;
  //   viewAllHref?: string;
  //   items: T[];
  //   renderItem: (item: T) => React.ReactNode;

  title?: string;
  viewAllHref?: string;
  items: T[];
  children: (item: T) => React.ReactNode;
};

export function CardSlider<T>({
  title,
  viewAllHref,
  items,
  children,
}: CardSliderProps<T>) {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>

          <div className="flex items-center gap-2">
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                View all
              </Link>
            )}

            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => scroll("left")}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </Button>

            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => scroll("right")}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Slider */}
      <ul
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory remove-scroll px-2 py-4 xl:px-0 xl:ml-[calc((100%-1300px)/2)]"
      >
        {items.map((item, index) => (
          <li key={index} className="flex-0 px-2 xl:px-4 snap-center min-w-63">
            {children(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
