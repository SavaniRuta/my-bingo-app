import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import PlayCard from "@/components/dashboard/bingoCard/bingoCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { DUMMY_CARDS, DUMMY_GAME_CARDS } from "@/utils/dummy-data";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const itemCount = 4;
  const cardsToRender = itemCount
    ? DUMMY_CARDS.slice(0, itemCount)
    : DUMMY_CARDS;

  const itemGameCount = 4;
  const gameCardsToRender = itemGameCount
    ? DUMMY_GAME_CARDS.slice(0, itemGameCount)
    : DUMMY_GAME_CARDS;

  return (
    <>
      {/* Dashboard content */}
      <div className="py-8">
        <div className="space-y-4 lg:space-y-8">
          <div>
            <div className="dashboard-container flex items-center justify-between">
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

            <div className="dashboard-container py-4 lg:px-4">
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
          </div>

          <div>
            <div className="dashboard-container flex items-center justify-between">
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

            <div className="dashboard-container py-4 lg:px-4">
              <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-8">
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
        </div>
      </div>
    </>
  );
}
