import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MyCards() {
  return (
    <>
      <ScreenHeader
        title="My Games"
        description="Manage your active games."
        actions={
          <div className="flex gap-2">
            <Input placeholder="Search" />
            <Button variant="secondary">Start new game</Button>
          </div>
        }
        meta={<Badge variant="secondary">21 games</Badge>}
      >

      </ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>My Games Page</h1>
        </div>
      </div>
    </>
  );
}
