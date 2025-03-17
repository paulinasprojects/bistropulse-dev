"use client";

import { useRouter } from "next/navigation";
import { EllipsisVertical, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


export const CellAction = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <EllipsisVertical/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Action
        </DropdownMenuLabel>
        <DropdownMenuItem 
            className="cursor-pointer" 
            onClick={() => router.push("/restaurant-management/restaurant/1/orders/1")}
          >
            <Eye className="size-4"/>
            View
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
