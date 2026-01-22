import { DUMMY_CARDS } from "@/utils/dummy-data";
import PlayCard from "@/components/dashboard/playCard/playCard";

export default function MyCards() {
  const itemCount = 8;
  const cardsToRender = itemCount
    ? DUMMY_CARDS.slice(0, itemCount)
    : DUMMY_CARDS;

  return (
    <>
      {/* My Cards content */}
      <div className="py-8">
        <div className="dashboard-container py-4 lg:px-4">
          <div className="space-y-4 lg:space-y-8">
            <div>
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                {cardsToRender.map((card) => (
                  <li key={card.id}>
                    <PlayCard
                      image={card.image}
                      title={card.title}
                      variant="my-cards"
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
