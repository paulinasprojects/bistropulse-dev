"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type WalletColumnsProps = {
  id: number;
  type: string;
  orderId: string;
  date: string;
  amount: string;
  balance: string;
}


export const columns: ColumnDef<WalletColumnsProps>[]  = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "orderId",
    header: "Order Id"
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="">
       {row.original.type === "Earning" && (
        <span className="text-[#27AE60]">{row.original.amount}</span>
       )}
       {row.original.type === "Withdraw" && (
        <span className="text-[#F04D58]">{row.original.amount}</span>
       )}
      </div>
    )
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: () => <CellAction/>
  },
];
