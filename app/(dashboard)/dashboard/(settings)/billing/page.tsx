import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, CreditCard, ReceiptText, Tag } from "lucide-react";

export default function AccountPage() {
  return (
    <>
      <div className="space-y-8 max-w-203 w-full">
        <div className="pb-5 border-b border-border">
          <h3 className="text-foreground text-2xl font-semibold">Billing</h3>
          <p className="text-muted-foreground">
            Manage your subscription, payment methods and invoices.
          </p>
        </div>
        <Card className="p-6 gap-1">
          <div className="flex">
            <div className="flex items-center flex-wrap gap-6 xl:gap-7 text-sm">
              <div className="flex flex-col gap-1 w-35">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="text-muted-foreground" size={14} />
                  <h3 className="text-foreground font-medium">Plan</h3>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  $14.99/mo
                </p>
                <Button variant="link" size="link" className="mr-auto">
                  Cancel
                </Button>
              </div>
              <Separator orientation="vertical" className="hidden md:block" />
              <div className="flex flex-col gap-1 w-35">
                <div className="flex items-center gap-1.5 mb-1">
                  <Calendar className="text-muted-foreground" size={14} />
                  <h3 className="text-foreground font-medium">Renewal</h3>
                </div>
                <p className="text-base text-muted-foreground mb-2">Monthly</p>
                <Badge variant="outline">24 days left</Badge>
              </div>
              <Separator orientation="vertical" className="hidden md:block" />
              <div className="flex flex-col gap-1 w-35">
                <div className="flex items-center gap-1.5 mb-1">
                  <CreditCard className="text-muted-foreground" size={14} />
                  <h3 className="text-foreground font-medium">
                    Payment method
                  </h3>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Ending in 4242
                </p>
                <Button variant="link" size="link" className="mr-auto">
                  Update
                </Button>
              </div>

              <Separator orientation="vertical" className="hidden md:block" />
              <div className="flex flex-col gap-1 w-35">
                <div className="flex items-center gap-1.5 mb-1">
                  <ReceiptText className="text-muted-foreground" size={14} />
                  <h3>Invoices</h3>
                </div>
                <p className="text-base text-muted-foreground mb-2">
                  Invoiced 01/01/25
                </p>
                <Button variant="link" size="link" className="mr-auto">
                  View history
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-4">Your plan</h2>
          <div className="flex gap-4">
            <Card className="p-5 gap-4 w-65">
              <div className="mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-foreground font-medium">Monthly</h3>
                  <h3 className="text-foreground font-medium">$34.95</h3>
                  <Badge variant="success">Current</Badge>
                </div>
                <p className="text-muted-foreground">Great for starting out</p>
              </div>
              <Button variant="secondary">Selected</Button>
            </Card>

            <Card className="p-5 gap-4 w-65">
              <div className="mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-foreground font-medium">6 month</h3>
                  <h3 className="text-foreground font-medium">$34.95</h3>
                </div>
                <p className="text-muted-foreground">Great for frequent use</p>
              </div>
              <Button variant="outline">Switch</Button>
            </Card>

            <Card className="p-5 gap-4 w-65">
              <div className="mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-foreground font-medium">Yearly</h3>
                  <h3 className="text-foreground font-medium">$49.95</h3>
                </div>
                <p className="text-muted-foreground">Great for pro users</p>
              </div>
              <Button variant="outline">Switch</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
