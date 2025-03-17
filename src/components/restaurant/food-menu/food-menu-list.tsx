"use client";

import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FileUp, Filter, SearchIcon, X } from "lucide-react";
import { useClickOutside } from "@/lib/use-click-outside";
import { FoodMenuListData } from "@/lib/data";
import { FilterModal } from "./filter-modal";
import { FoodMenuTable } from "./food-menu-table";
import { columns } from "./columns";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";

export const FoodMenuList = () => {
  const ref = useRef(null)
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const router = useRouter();

  const openModal = () => {
    setOpenFilterModal(!openFilterModal)
  }

  useClickOutside(ref, openModal)

  return (
    <>
    <Card>
      <CardContent className="mt-[29.5px]">
        <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
        <CardHeading
          title="Food"
        />
        <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
          <div className="relative">
            <input type="text" placeholder="Search" className="w-[101px] h-[40px] pl-8 border-[1px] border-[#F4F4D4] rounded-[4px]" />
            <SearchIcon className="absolute top-2 left-1 size-6 text-textColor"/>
          </div>
          <button className="flex items-center justify-center gap-2 border-[1px] border-[#f4f4f4] rounded-[4px] w-[87px] h-[40px] px-2 text-ms font-normal text-[#9A9FA5]" onClick={() => openModal()}>
            {openFilterModal ? (
              <X className="size-6 text-textColor"/>
            ) : (
              <Filter className="size-6 text-textColor"/>
            )}
            Filter
          </button>
          <button className="w-[92px] h-[40px] text-ms font-medium bg-buttonColor hover:bg-buttonHover text-white rounded-[4px] max-sm:text-xs" onClick={() => router.push('/restaurant-management/restaurant/1/food-menu/add-food')}>Add Food</button>
          <button className="flex items-center px-2 text-ms font-medium gap-2 bg-[#efefef] w-[114px] h-[40px] rounded-[4px] max-sm:hidden">
            <FileUp className="size-6"/>
            Export
            <MdKeyboardArrowDown className="size-5"/>
          </button>
        </div>
        </div>
        {openFilterModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="customer-filter"
            ref={ref}
          >
            <FilterModal/>
          </motion.div>
        )}
        <FoodMenuTable data={FoodMenuListData} columns={columns}/>
      </CardContent>
    </Card>
    </>
  )
}
