"use client";
import type { Metadata } from "next";
import "@styles/global.css";
import { Header } from "@/components/dashboard/header/header";
import { usePathname } from "next/navigation";
import { MainHeader } from "@/components/dashboard/header/mainHeader";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname();

  return (
    <div className="bg-light-gray h-dvh flex flex-col">
      <MainHeader />
      <div className="flex-auto overflow-y-auto">
        <Header pathname={pathName} />
        {children}
      </div>
    </div>
  );
}
