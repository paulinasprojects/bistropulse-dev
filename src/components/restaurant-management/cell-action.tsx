'use client';

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CopyIcon, EllipsisVertical, Eye, Pencil, ShieldMinus } from "lucide-react";
import { Restaurants } from "./columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  data: Restaurants;
}

export const CellAction = ({ data }: Props) => {
  const onCopy = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    toast.success("Restaurant id copied to clipboard")
  };

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
        <DropdownMenuItem onClick={() => onCopy(data.id)} className="cursor-pointer">
          <CopyIcon className="h-4 w-4"/>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(`/restaurant-management/restaurant/${data.id}`,)}>
          <Eye className="h-4 w-4"/>
          View
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Pencil className="h-4 w-4"/>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <ShieldMinus className="h-4 w-4"/>
          Deactivate
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
