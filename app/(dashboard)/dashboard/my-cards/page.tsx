import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartLine, Funnel } from "lucide-react";
import { DUMMY_CARDS } from "@/lib/cards";
import PlayCard from "@/components/dashboard/playCard/playCard";

export default function MyCards() {
  const itemCount = 8;
  const cardsToRender = itemCount
    ? DUMMY_CARDS.slice(0, itemCount)
    : DUMMY_CARDS;

  return (
    <>
      <ScreenHeader
        title="My cards"
        description="Edit, publish, share, print or play online with all the cards you’ve created."
        actions={
          <div className="flex gap-2">
            <Input placeholder="Search" />
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
              <ul className="snap-x snap-mandatory remove-scroll lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:snap-none lg:px-0 flex overflow-x-auto px-4 gap-5 lg:gap-8">
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
