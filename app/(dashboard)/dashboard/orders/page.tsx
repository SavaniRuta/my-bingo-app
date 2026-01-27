import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        variant="success"
        size="lg"
      >
        Completed
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
  {
    orderId: "#123421525125",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="warning"
        size="lg"
      >
        On route
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
  {
    orderId: "#123421525126",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="warning"
        size="lg"
      >
        Canceled
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
  {
    orderId: "#123421525127",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="success"
        size="lg"
      >
        Completed
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
  {
    orderId: "#123421525128",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="warning"
        size="lg"
      >
        On route
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
  {
    orderId: "#123421525129",
    cardName: "Lets play bingo",
    total: "$70.00",
    orderDate: "Jan 20th, 2024",
    status: (
      <Badge
        variant="destructive"
        size="lg"
      >
        Canceled
      </Badge>
    ),
    info: (
      <>
        <Button
          variant="outline"
          size="sm"
        >
          Invoice
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          PDF
        </Button>
        <Button
          size="sm"
        >
          View
        </Button>
      </>
    ),
  },
];

export default function Orders() {
  return (
    <>
      <div className="py-8">
        <div className="dashboard-container">
          <div className="max-w-241.25 p-6 rounded-xl border bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-25">Order ID</TableHead>
                  <TableHead>Card name</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Order date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Info</TableHead>
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
                    <TableCell className="text-right"><div className="flex gap-2">{order.info}</div></TableCell>
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
