import { ScreenHeader } from "@/components/dashboard/header/screenHeader";

export default function Changlog() {
  return (
    <>
      <ScreenHeader
        title="What’s new"
        description="New updates and announcements from Bingo Card Creator."
      >
      </ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>Changelog Page</h1>
        </div>
      </div>
    </>
  );
}
