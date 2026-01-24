"use client";
import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { DUMMY_GAME_CARDS } from "@/utils/dummy-data";
import { usePathname } from "next/navigation";

export default function Games() {
  const itemCount = 12;
  const gameCardsToRender = itemCount
    ? DUMMY_GAME_CARDS.slice(0, itemCount)
    : DUMMY_GAME_CARDS;

  const pathName = usePathname();
  return (
    <>
      <DashboardHeader pathName={pathName}>
        <div className="space-y-4 lg:space-y-8">
          <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
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
      </DashboardHeader>
    </>
  );
}
