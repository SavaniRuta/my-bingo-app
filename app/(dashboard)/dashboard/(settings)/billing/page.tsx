import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";

export default function AccountPage() {
  return (
    <>
      <div className="space-y-8 max-w-203 w-full">
        <div className="pb-5 border-b border-border">
          <h3 className="text-2xl font-semibold">Billing</h3>
          <p className="text-muted-foreground">
            Manage your subscription, payment methods and invoices.
          </p>
        </div>
        <Card className="p-6 gap-1">
          <div className="w-fit flex flex-col sm:flex-row flex-wrap  gap-6 xl:gap-7">
            <div className="pr-6 whitespace-nowrap relative sm:pr-0">
              <div className="w-35 flex flex-col items-start h-full">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="text-muted-foreground" size={14} />
                  <h3>Plan</h3>
                  <Badge variant="sucess">Active</Badge>
                </div>
                <p className="text-base text-muted-foreground">
                  $14.99/mo
                </p>
                <Button variant="link" size="link">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="shrink-0 bg-border w-px h-auto sm:block hidden"></div>
            <div className="pr-6 whitespace-nowrap relative sm:pr-0">
              <div className="w-35 flex flex-col items-start h-full">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="text-muted-foreground" size={14} />
                  <h3>Renewal</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Monthly
                </p>
                <Badge variant="outline">
                  24 days left
                </Badge>
              </div>
            </div>
            <div className="shrink-0 bg-border w-px h-auto sm:block hidden"></div>
            <div className="pr-6 whitespace-nowrap relative sm:pr-0">
              <div className="w-35 flex flex-col items-start h-full">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="text-muted-foreground" size={14} />
                  <h3>Payment method</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Ending in 4242
                </p>
                <Button variant="link" size="link">
                  Update
                </Button>
              </div>
            </div>
            <div className="shrink-0 bg-border w-px h-auto sm:block hidden"></div>
            <div className="pr-6 whitespace-nowrap relative sm:pr-0">
              <div className="w-35 flex flex-col items-start h-full">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="text-muted-foreground" size={14} />
                  <h3>Invoices</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Invoiced 01/01/25
                </p>
                <Button variant="link" size="link">
                  View history
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
