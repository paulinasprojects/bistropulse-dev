"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export type CustomersOrders = {
  orderId: string;
  details: string;
  date: string;
  status: string;
}

export const columns: ColumnDef<CustomersOrders>[] = [
  {
    accessorKey: "orderId",
    header: "OrderId",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "date",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowDown className="ml-2 h-4 w-4"/>
        </Button>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => (
      <div className="">
        {row.original.status === "Pending" && (
          <span className="text-[#F69133]">{row.original.status}</span>
        )}
        {row.original.status === "Cancelled" && (
          <span className="text-[#F04D58]">{row.original.status}</span>
        )}
        {row.original.status === "Delivered" && (
          <span className="text-[#27AE60]">{row.original.status}</span>
        )}
        {row.original.status === "Preparing" && (
          <span className="text-[#2796AE]">{row.original.status}</span>
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
    cell: ({ row }) => <CellAction data={row.original}/>
  },
]