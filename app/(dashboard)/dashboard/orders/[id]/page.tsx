"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OctagonAlert, Truck } from "lucide-react";
import { useParams } from "next/navigation";

export default function OrderDetail() {
  const params = useParams();
  const orderId = params.id as string;

  return (
    <>
      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>Detail Order page</h1>
        </div>
      </div>
    </>
  );
}
