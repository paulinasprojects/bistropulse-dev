"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type Customers = {
  id: number;
  name: string;
  phone: string;
  location: string;
};

export const columns: ColumnDef<Customers>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  }
];