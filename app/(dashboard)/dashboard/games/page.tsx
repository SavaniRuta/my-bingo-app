
import { GameCard } from "@/components/dashboard/gameCard/gameCard";
import { DUMMY_GAME_CARDS } from "@/utils/dummy-data";

export default function MyCards() {
  const itemCount = 12;
  const gameCardsToRender = itemCount
    ? DUMMY_GAME_CARDS.slice(0, itemCount)
    : DUMMY_GAME_CARDS;
  return (
    <>
      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container py-4 lg:px-4">
          <div className="space-y-4 lg:space-y-8">
            <div>
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
          </div>
        </div>
      </div>
    </>
  );
}
