"use client";
import "@styles/global.css";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { usePathname } from "next/navigation";
import { Header } from "@/components/global/header/header";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname();

  return (
    <div className="bg-light-gray h-dvh flex flex-col">
      <Header callFrom="dashboard"/>
      <div className="flex-auto overflow-y-auto">
        <DashboardHeader pathname={pathName} />
        {children}
      </div>
    </div>
  );
}
