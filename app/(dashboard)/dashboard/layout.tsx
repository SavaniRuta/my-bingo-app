import "@styles/global.css";
import { Header } from "@/components/global/header/header";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="bg-light-gray h-dvh flex flex-col">
      <Header />
      <div className="flex-auto overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
