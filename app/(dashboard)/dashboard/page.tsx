import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartLine } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <ScreenHeader
        title="Dashboard"
        description="An overview of your recent account activity."
        actions={
          <div className="flex gap-2">
            <Input placeholder="Search" />
            <Button variant="outline" className="h-10"><ChartLine /></Button>
          </div>
        }
      >

      </ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>Dashboard Page</h1>
        </div>
      </div>
    </>
  );
}
