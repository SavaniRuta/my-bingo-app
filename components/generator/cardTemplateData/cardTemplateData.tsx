"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TabValue = "styles" | "pre-filled" | "my-cards";

type CardTemplateDataProps = {
  tabItem: {
    value: string;
    label: string;
  };
};

const templateDataByTab = {
  styles: {
    categories: [
      { id: "all", label: "All", isActive: true },
      { id: "abstract", label: "Abstract" },
      { id: "basic", label: "Basic" },
      { id: "educational", label: "Educational" },
      { id: "gradients", label: "Gradients" },
      { id: "illustrations", label: "Illustrations" },
    ],
    images: [
      { id: 1, src: "/images/meet-greet-card.png", alt: "Style template 1" },
      { id: 2, src: "/images/meet-greet-card.png", alt: "Style template 2" },
      { id: 3, src: "/images/meet-greet-card.png", alt: "Style template 3" },
      { id: 4, src: "/images/meet-greet-card.png", alt: "Style template 4" },
      { id: 5, src: "/images/meet-greet-card.png", alt: "Style template 5" },
      { id: 6, src: "/images/meet-greet-card.png", alt: "Style template 6" },
      { id: 7, src: "/images/meet-greet-card.png", alt: "Style template 7" },
      { id: 8, src: "/images/meet-greet-card.png", alt: "Style template 8" },
      { id: 9, src: "/images/meet-greet-card.png", alt: "Style template 9" },
    ],
  },
  "pre-filled": {
    categories: [
      { id: "all", label: "All", isActive: true },
      { id: "ice-breakers", label: "Ice breakers" },
      { id: "team-building", label: "Team building" },
      { id: "classroom", label: "Classroom" },
      { id: "events", label: "Events" },
      { id: "workshops", label: "Workshops" },
    ],
    images: [
      {
        id: 1,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 1",
      },
      {
        id: 2,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 2",
      },
      {
        id: 3,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 3",
      },
      {
        id: 4,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 4",
      },
      {
        id: 5,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 5",
      },
      {
        id: 6,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 6",
      },
      {
        id: 7,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 7",
      },
      {
        id: 8,
        src: "/images/card-preview-image.png",
        alt: "Pre-filled template 8",
      },
    ],
  },
  "my-cards": {
    categories: [
      { id: "all", label: "All", isActive: true },
      { id: "recent", label: "Recent" },
      { id: "favorite", label: "Favorite" },
      { id: "shared", label: "Shared" },
      { id: "draft", label: "Draft" },
      { id: "archived", label: "Archived" },
      { id: "test", label: "Test" },
    ],
    images: [
      {
        id: 1,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 1",
      },
      {
        id: 2,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 2",
      },
      {
        id: 3,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 3",
      },
      {
        id: 4,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 4",
      },
      {
        id: 5,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 5",
      },
      {
        id: 6,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 6",
      },
      {
        id: 7,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 7",
      },
      {
        id: 8,
        src: "/images/elementory-ice-braker-card.jpg",
        alt: "My card 8",
      },
    ],
  },
} as const;

export default function CardTemplateData({ tabItem }: CardTemplateDataProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const selectedTemplateData =
    templateDataByTab[tabItem.value as TabValue] ?? templateDataByTab.styles;

  const updateScrollButtons = () => {
    const el = scrollContainerRef.current;

    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;

    if (!el) return;

    const amount = Math.max(el.clientWidth * 0.65, 180);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollButtons();

    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => updateScrollButtons();
    const handleResize = () => updateScrollButtons();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;

    if (!el) return;

    el.scrollTo({ left: 0, behavior: "auto" });
    updateScrollButtons();
  }, [tabItem.value]);

  return (
    <>
      <div className="flex items-center mb-6">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={() => scrollByAmount("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll categories left"
          className={cn(!canScrollLeft && "mr-1.5")}
        >
          <ChevronLeft className="size-4" />
        </Button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto snap-x snap-mandatory remove-scroll"
        >
          <div className="flex items-center gap-2">
            {selectedTemplateData.categories.map((category) => (
              <Button
                key={category.id}
                type="button"
                variant="outline"
                size="sm"
                className={cn(
                  "snap-start border-border",
                  "isActive" in category && category.isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground",
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={() => scrollByAmount("right")}
          disabled={!canScrollRight}
          aria-label="Scroll categories right"
          className={cn(!canScrollRight && "ml-1.5")}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
        {selectedTemplateData.images.map((image) => (
          <div
            key={image.id}
            className="rounded-14 overflow-hidden cursor-pointer hover:opacity-80 transition"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={284}
              height={284}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
}
