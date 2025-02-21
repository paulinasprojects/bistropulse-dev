"use client";

import { Reviews } from "./columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash, CopyIcon} from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  data: Reviews;
}

export const CellAction = ({data}: Props) => {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Review id copied to clipboard")
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
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <CopyIcon className="h-4 w-4"/>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="h-4 w-4"/>
            Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
