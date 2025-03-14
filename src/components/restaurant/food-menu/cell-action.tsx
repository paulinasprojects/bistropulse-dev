"use client";

import { Eye, Pencil, Trash, EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { FoodMenuListProps } from "./columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  data: FoodMenuListProps;
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
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>
          Actions
        </DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(`/restaurant-management/restaurant/1/food-menu/${data.id}`)}>
          <Eye className="size-4"/>
            View
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/")}>
          <Pencil className="size-4"/>
            Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Trash className="size-4"/>
            Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
