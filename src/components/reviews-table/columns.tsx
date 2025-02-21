"use client";

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
export type Reviews = {
  id: string;
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