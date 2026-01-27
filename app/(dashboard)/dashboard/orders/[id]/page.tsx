"use client";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { useParams } from "next/navigation";

export default function OrderDetail() {
  const params = useParams();
  const orderId = params.id as string;

  return (
    <>
      <DashboardHeader custompathName={orderId}>
        <h1>Detail Order page</h1>
      </DashboardHeader>
    </>
  );
}
