import { ScreenHeader } from "@/components/dashboard/header/screenHeader";

export default function EmptyDashboard() {
  return (
    <>
      <ScreenHeader
        title="Dashboard"
        description="An overview of your recent account activity."
      >

      </ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>Empty Dashboard</h1>
        </div>
      </div>
    </>
  );
}
