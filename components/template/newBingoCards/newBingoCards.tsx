import { Text } from "@/components/global/text/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URLS } from "@/utils/const";
import { ArrowRight, StickyNote } from "lucide-react";
import Link from "next/link";
import { NEW_BINGO_CARDS } from "@/utils/dummy-data";
import PopularCatCard from "../popularCatTemplate/popularCatCard";

export default function NewBingoCards() {
  return (
    <section className="py-6 lg:py-10">
      <div className="flex gap-8 flex-col lg:flex-row template-container">
        <div className="lg:max-w-60 lg:w-full">
          <div className="h-10 w-10 rounded-md bg-green-100 text-green-500 flex justify-center items-center mb-4">
            <StickyNote />
          </div>
          <Text
            as="h2"
            variant="xl"
            weight="semibold"
            color="gray_900"
            className="mb-1.5"
          >
            New bingo cards
          </Text>
          <Text variant="sm" color="gray_700" className="mb-4">
            Explore our most popular bingo cards, perfect for every occasion!
            From parties and team-building to classroom fun and holidays, find
            creative themes that make your events unforgettable.
          </Text>
          <Link
            href={SITE_URLS.template}
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 h-auto has-[>svg]:px-0",
            )}
          >
            View all
            <ArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4">
          {NEW_BINGO_CARDS.map((card) => (
            <PopularCatCard
              key={card.id}
              category={card.category}
              title={card.title}
              image={card.image}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
