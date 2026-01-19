"use client";
import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OctagonAlert, Truck } from "lucide-react";
import { useParams } from "next/navigation";

export default function OrderDetail() {
  const params = useParams();
  const orderId = params.id as string;

  return (
    <>
      <ScreenHeader
        title={`Order #${orderId}`}
        description="Placed on 20 Feb 2024, 8:22 pm"
        actions={
          <div className="flex gap-2">
            <Button variant="outline">
              <OctagonAlert />
              Report a problem
            </Button>
          </div>
        }
        meta={
          <Badge variant="secondary">
            <Truck />
            Pending
          </Badge>
        }
      ></ScreenHeader>

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <h1>Detail Order page</h1>
        </div>
      </div>
    </>
  );
}
