"use client";

import { FileUp, SearchIcon, Filter } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FoodExtrasListData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { FoodExtraTable } from "./food-extra-table";
import { columns } from "./columns";
import { CardHeading } from "@/components/card-heading";

export const FoodExtrasList = () => {
  return (
    <>
    <Card>
      <CardContent className="mt-[29.5px]">
        <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
          <CardHeading
            title="Extra"
          />
          <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
            <div className="relative">
              <input type="text" placeholder="Search" className="w-[101px] h-[40px] pl-8 border-[1px] border-[#f4f4d4] rounded-[4px] placeholder:text-sm" />
              <SearchIcon className="absolute top-2.5 left-1.5 size-5 text-[#6F767E]"/>
            </div>
            <button className="flex items-center justify-center gap-2 border-[1px] border-[#f4f4f4] rounded-[4px] w-[87px] h-[40px] px-2 text-[15px] font-normal text-[#9A9FA5]">
              <Filter className="size-6 text-[#6F767E]"/>
              Filter
            </button>
            <button className="w-[92px] h-[40px] text-[15px] font-medium bg-[#2A85FF] hover:bg-[#4291F8] text-white rounded-[4px] max-sm:text-[12px]">Add Extra</button>
            <button className="flex items-center px-2 text-[15px] font-medium gap-2 bg-[#efefef] w-[114px] h-[40px] rounded-[4px] max-sm:hidden">
              <FileUp className="size-6"/>
              Export
              <MdKeyboardArrowDown className="size-5"/>
          </button>
          </div>
        </div>
        <FoodExtraTable columns={columns} data={FoodExtrasListData}/>
      </CardContent>
    </Card>
    </>
  )
}
