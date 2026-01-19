import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartLine, Funnel } from "lucide-react";

export default function MyCards() {
  return (
    <>
      <ScreenHeader
        title="My cards"
        description="Edit, publish, share, print or play online with all the cards you’ve created."
        actions={
          <div className="flex gap-2">
            <Input placeholder="Search" />
            <Button variant="outline"><Funnel /></Button>
            <Button variant="outline"><ChartLine /></Button>
            <Button variant="destructive" className="opacity-50">Desctructive</Button>
          </div>
        }
        meta={<Badge variant="secondary">21 Cards</Badge>}
      >

      </ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>My Cards Page</h1>
        </div>
      </div>
    </>
  );
}
