"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const TotalRevenueDropdownMenu = () => {
  const [selected, setSelected] = useState<string>("Daily");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[95px] h-[34px] flex items-center justify-center gap-1.5 text-ms font-normal text-textColor border-[1px] border-[#EFEFEF] rounded-[5px] px-2">
        {selected}
        <ArrowDown className="size-4"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[75px]">
        <DropdownMenuItem className="w-[75px] h-[34px]" onClick={() => setSelected("Daily")}>Daily</DropdownMenuItem>
        <DropdownMenuItem className="w-[75px] h-[34px]" onClick={() => setSelected("Monthly")}>Monthly</DropdownMenuItem>
        <DropdownMenuItem className="w-[75px] h-[34px]" onClick={() => setSelected("Yearly")}>Yearly</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
