"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type Restaurants = {
  id: string;
  name: string;
  representative: string;
  location: string;
  phone: string;
  rating: number;
  status: string;
}

export const columns: ColumnDef<Restaurants>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "representative",
    header: "Representative",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  }
];
