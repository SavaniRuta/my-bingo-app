import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import PlayCard from "@/components/dashboard/playCard/playCard";
import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";
import Link from "next/link";

import { DUMMY_CARDS, DUMMY_GAME_CARDS } from "@/lib/cards";
import { AppInput } from "@/components/appInput/appInput";

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
      <ScreenHeader
        title="Dashboard"
        description="An overview of your recent account activity."
        actions={
          <div className="flex gap-2">
            <AppInput placeholder="Search" variant="search"/>
            <Button variant="outline" className="h-10">
              <ChartLine />
            </Button>
          </div>
        }
      />

      {/* Bottom content */}
      <div className="py-8">
        <div className="space-y-4 lg:space-y-8">
          <div>
            <div className="dashboard-container flex items-center justify-between">
              <h3 className="font-inter text-xl font-semibold text-foreground">
                Recently Modified
              </h3>
              <Link href="#">
                <Button variant="outline">View all</Button>
              </Link>
            </div>

            {/* <PlayCardList variant="recent" itemCount={4} /> */}
            <div className="dashboard-container py-4 lg:px-4">
              <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-8">
                {cardsToRender.map((card) => (
                  <li key={card.id}>
                    <PlayCard image={card.image} title={card.title} />
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
              <Link href="#">
                <Button variant="outline">View all</Button>
              </Link>
            </div>
            {/* Game Card */}

            <div className="dashboard-container py-4 lg:px-4">
              <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-8">
                {gameCardsToRender.map((card) => (
                  <li key={card.id}>
                    <GameCard
                      image={card.image}
                      title={card.title}
                      status={card.status}
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
