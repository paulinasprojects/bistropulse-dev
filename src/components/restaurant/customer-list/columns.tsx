"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type Customers = {
  id: number;
  name: string;
  image: string;
  phone: string;
  email: string;
  location: string;
  created: string;
}

export const columns: ColumnDef<Customers>[] = [
  {
    accessorKey:"name",
    header: "Name",
  },
  {
    accessorKey:"image",
    header: "Picture",
    cell: ({row}) => (
      <div className="">
        <Image
          src={row.original.image}
          alt="image"
          width={40}
          height={40}

        />
      </div>
    )
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
  {
    accessorKey: "action",
    header: "Action",
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  },
]