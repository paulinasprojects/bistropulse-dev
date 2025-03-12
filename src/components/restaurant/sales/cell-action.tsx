"use client";

import { useRouter } from "next/navigation";
import { SalesColumnsProps } from "./columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, EllipsisVertical } from "lucide-react";

interface Props {
  data: SalesColumnsProps;
}

export const CellAction = ({data}: Props) => {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <EllipsisVertical/>
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>
          Actions
        </DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(`/restaurant-management/restaurant/1/sales/${data.id}`)}>
          <Eye className="size-4"/>
          View
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
