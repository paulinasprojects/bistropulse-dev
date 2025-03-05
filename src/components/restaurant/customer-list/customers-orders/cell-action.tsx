"use client";

import toast from "react-hot-toast";
import { CustomersOrders } from "./columns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash, CopyIcon } from "lucide-react";


interface Props {
  data: CustomersOrders;
}

export const CellAction = ({data}: Props) => {
  const onCopy = (orderId: string) => {
    navigator.clipboard.writeText(orderId);
    toast.success("Customer order coppied to clipboard")
  };

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
        <DropdownMenuItem onClick={() => onCopy(data.orderId)}>
          <CopyIcon className="size-4"/>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="size-4"/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
