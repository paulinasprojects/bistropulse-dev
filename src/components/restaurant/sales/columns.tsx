"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";

export type SalesColumnsProps = {
  id: number;
  dishName: string;
  image:string;
  category: string;
  price: string;
  numberOfSales: string;

}

export const columns: ColumnDef<SalesColumnsProps>[] = [
 {
  accessorKey: "dishName",
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
         className="w-[48px] h-[48px]  rounded-[8px] object-cover"
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
    accessorKey: "numberOfSales",
    header: "Number of Sales",
    cell: ({row}) => <div className="font-medium text-sm text-[#27AE60]">{row.original.numberOfSales}</div>
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  }
]
