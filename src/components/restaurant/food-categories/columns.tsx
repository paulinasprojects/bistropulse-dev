"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type FoodCategoriesListProps = {
  id: number;
  name: string;
  items: number;
}

export const columns: ColumnDef<FoodCategoriesListProps>[] = [
  {
    accessorKey: "name",
    header: "Category Name"
  },
  {
    accessorKey: "items",
    header: "Number of items",
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  },
]
