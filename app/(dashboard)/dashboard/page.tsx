"use client";
import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import PlayCard from "@/components/dashboard/bingoCard/bingoCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { DUMMY_CARDS, DUMMY_GAME_CARDS } from "@/utils/dummy-data";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const itemCount = 4;
  const cardsToRender = itemCount
    ? DUMMY_CARDS.slice(0, itemCount)
    : DUMMY_CARDS;

  const itemGameCount = 4;
  const gameCardsToRender = itemGameCount
    ? DUMMY_GAME_CARDS.slice(0, itemGameCount)
    : DUMMY_GAME_CARDS;

  const pathName = usePathname();

  return (
    <>
      <DashboardHeader pathName={pathName}>
        <div className="space-y-4 lg:space-y-12">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">
                Recently Modified
              </h3>

              <Link
                href={SITE_URLS.my_cards}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                View all
              </Link>
            </div>

            <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-8">
              {cardsToRender.map((card) => (
                <li key={card.id}>
                  <PlayCard
                    image={card.image}
                    title={card.title}
                    id={card.id}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-inter text-xl font-semibold text-foreground">
                Active Games
              </h3>
              <Link
                href={SITE_URLS.games}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                View all
              </Link>
            </div>

            <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none flex overflow-x-auto gap-5 lg:gap-8">
              {gameCardsToRender.map((card) => (
                <li key={card.id}>
                  <GameCard
                    image={card.image}
                    title={card.title}
                    status={card.status}
                    id={card.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DashboardHeader>
    </>
  );
}
