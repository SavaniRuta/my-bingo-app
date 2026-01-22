import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    orderId: "#123421525124",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-success border border-success text-success-foreground"
      >
        Completed
      </Badge>
    ),
    info: "Invoice",
  },
  {
    orderId: "#123421525125",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-warning border border-warning text-warning-foreground"
      >
        On route
      </Badge>
    ),
    info: "Invoice",
  },
  {
    orderId: "#123421525126",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-destructive border border-destructive text-destructive-foreground"
      >
        Canceled
      </Badge>
    ),
    info: "Invoice",
  },
  {
    orderId: "#123421525127",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-success border border-success text-success-foreground"
      >
        Completed
      </Badge>
    ),
    info: "Invoice",
  },
  {
    orderId: "#123421525128",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-warning border border-warning text-warning-foreground"
      >
        On route
      </Badge>
    ),
    info: "Invoice",
  },
  {
    orderId: "#123421525129",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="outline"
        className="bg-destructive border border-destructive text-destructive-foreground"
      >
        Canceled
      </Badge>
    ),
    info: "Invoice",
  },
];

export default function Orders() {
  return (
    <>
      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <div className="max-w-241.25 p-6 rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-25">Order ID</TableHead>
                  <TableHead>Card name</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Order date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.orderId}>
                    <TableCell className="font-medium">
                      {order.orderId}
                    </TableCell>
                    <TableCell>{order.cardName}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell className="text-right">{order.info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
