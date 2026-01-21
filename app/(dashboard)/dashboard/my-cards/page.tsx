import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartLine, Funnel } from "lucide-react";
import { DUMmy_cards } from "@/utils/cards";
import PlayCard from "@/components/dashboard/playCard/playCard";

export default function MyCards() {
  const itemCount = 8;
  const cardsToRender = itemCount
    ? DUMmy_cards.slice(0, itemCount)
    : DUMmy_cards;

  return (
    <>
      <ScreenHeader
        title="My cards"
        description="Edit, publish, share, print or play online with all the cards you’ve created."
        actions={
          <div className="flex gap-2">
            <AppInput placeholder="Search" variant="search"/>
            <Button variant="outline">
              <Funnel />
            </Button>
            <Button variant="outline">
              <ChartLine />
            </Button>
            <Button variant="destructive" className="opacity-50">
              Delete
            </Button>
          </div>
        }
        meta={<Badge variant="secondary">21 Cards</Badge>}
      ></ScreenHeader>

      {/* Bottom content */}
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
