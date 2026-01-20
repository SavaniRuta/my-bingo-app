import { AppInput } from "@/components/appInput/appInput";
import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DUMMY_GAME_CARDS } from "@/lib/cards";

export default function MyCards() {
  const itemCount = 12;
  const gameCardsToRender = itemCount
    ? DUMMY_GAME_CARDS.slice(0, itemCount)
    : DUMMY_GAME_CARDS;
  return (
    <>
      <ScreenHeader
        title="My Games"
        description="Manage your active games."
        actions={
          <div className="flex gap-2">
            <AppInput placeholder="Search" variant="search"/>
            <Button variant="secondary">Start new game</Button>
          </div>
        }
        meta={<Badge variant="secondary">21 games</Badge>}
      ></ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container py-4 lg:px-4">
          <div className="space-y-4 lg:space-y-8">
            <div>
              <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-7">
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
