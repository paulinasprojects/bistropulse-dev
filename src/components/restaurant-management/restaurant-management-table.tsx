"use client";

import {motion} from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon, Filter, FileUp, X } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RestaurantsData } from "@/lib/data";
import { columns } from "./columns";

import { RestaurantTable } from "./restaurant-table";
import { CardHeading } from "../card-heading";
import { FilterModalContent } from "./filter-modal-content";
import { Card, CardContent } from "@/components/ui/card";

export const RestaurantManagementTable = () => {
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const OpenFilterModal = () => {
    setFilterModalOpen(!filterModalOpen)
  };

  const router = useRouter();

  return (
    <>
      <Card className="w-full py-[31px]">
        <CardContent>
        <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
          <CardHeading
            title="Restaurants"
          />
          <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
            <div className="relative">
              <input type="text" placeholder="Search" className="w-[104px] h-[40px] pl-8 border-[1px] border-[#F4F4F4] rounded-[4px]" />
              <SearchIcon className="absolute top-2 left-1 size-6 text-[#6F767E]"/>
            </div>
            <button className="flex items-center justify-center gap-2 border-[1px] border-[#F4F4F4] rounded-[4px] w-[87px] h-[40px] px-2 text-[15px] font-normal text-[#9A9FA5]" onClick={() => OpenFilterModal()}>
              {filterModalOpen ? (
                <X className="size-6 text-[#6F767E]"/>
              ) : (
                <Filter className="size-6 text-[#6F767E]"/>
              )}
              Filter
            </button>
            <button className="w-[134px] h-[40px] text-[15px] font-medium  bg-[#2A85FF] hover:bg-[#4291f8] text-white rounded-[4px] max-sm:text-[12px]" onClick={()=> router.push("/restaurant-management/add-new-restaurant")}>Add Restaurant</button>
            <button className="flex items-center px-2 text-[15px] font-medium gap-2 bg-[#efefef] w-[114px] h-[40px] rounded-[4px] max-sm:hidden">
              <FileUp className="size-6"/>
              Export
              <MdKeyboardArrowDown className="size-5"/>
            </button>
          </div>
        </div>
        {filterModalOpen && (
            <motion.div  
              initial={{ opacity: 0, y:20 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ duration: 0.2 }} 
              className="test-classname">
              <FilterModalContent/>
            </motion.div>
          )}
        <RestaurantTable columns={columns} data={RestaurantsData}/>
        </CardContent>
      </Card>
    </>
  )
}
