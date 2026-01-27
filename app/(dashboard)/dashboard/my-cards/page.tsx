"use client";
import { DUMMY_CARDS } from "@/utils/dummy-data";
import PlayCard from "@/components/dashboard/bingoCard/bingoCard";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { SITE_URLS } from "@/utils/const";

export default function MyCards() {
  const itemCount = 8;
  const cardsToRender = itemCount
    ? DUMMY_CARDS.slice(0, itemCount)
    : DUMMY_CARDS;

  return (
    <>
      <DashboardHeader pathName={SITE_URLS.my_cards}>
        <div className="space-y-4 lg:space-y-8">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            {cardsToRender.map((card) => (
              <li key={card.id}>
                <PlayCard
                  image={card.image}
                  title={card.title}
                  variant="my-cards"
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
