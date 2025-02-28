"use client";

import { Customers } from "./columns";
import { EllipsisVertical, ShieldAlert, Pencil, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

interface Props {
  data: Customers;
}

export const CellAction = ({data}: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <EllipsisVertical/>
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Actions
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => router.push(`/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/customer-list/${data.id}`)}>
          <Eye className="h-4 w-4"/>
          View
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="h-4 w-4"/>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShieldAlert className="h-4 w-4"/>
          Disable
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
