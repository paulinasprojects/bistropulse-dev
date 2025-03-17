"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

export type OrdersColumnsProps = {
  id: number;
  orderId: string;
  date: string;
  customerName: string;
  price: string;
  status: string;
}

export const columns: ColumnDef<OrdersColumnsProps>[] = [
  {
    accessorKey: "orderId",
    header: "Order Id"
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        {row.original.status === "Pending" && (
          <span className="text-[#F69133]">{row.original.status}</span>
        )}
        {row.original.status === "Preparing" && (
          <span className="text-[#2796AE]">{row.original.status}</span>
        )}
        {row.original.status === "Cancelled" && (
          <span className="text-[#F04D58]">{row.original.status}</span>
        )}
        {row.original.status === "Delivered" && (
          <span className="text-[#27AE60]">{row.original.status}</span>
        )}
        {row.original.status === "On the way" && (
          <span className="text-[#4493FD]">{row.original.status}</span>
        )}
      </div>
    )
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: () => <CellAction/>
  },
]