"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type FoodMenuListProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string;
  status: string;
}

export const columns: ColumnDef<FoodMenuListProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({row}) => (
      <Image
        src={row.original.image}
        alt="image"
        width={48}
        height={48}
      />
    )
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => (
      <div className="">
        {row.original.status === "Active" && (
          <span className="text-[#27AE60]">{row.original.status}</span>
        )}
        {row.original.status === "Disabled" && (
          <span className="text-[#F04D58]">{row.original.status}</span>
        )}
      </div>
    )
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  },
]