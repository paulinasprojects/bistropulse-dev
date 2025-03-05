"use client";

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
export type Reviews = {
  id: number;
  name: string;
  date: string;
  review: string;
  rating: number;
}

export const columns: ColumnDef<Reviews>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "review",
    header: "Review",
  },
  {
    accessorKey: "rating",
    header: "Rating"
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  }
];