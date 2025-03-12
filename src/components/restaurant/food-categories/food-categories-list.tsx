"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";
import { FileUp, SearchIcon } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FoodCategoriesTable } from "./food-categories-table";
import { FoodCategoriesListData } from "@/lib/data";
import { columns } from "./columns";
import { AddCategoryModal } from "./add-category-modal";

export const FoodCategiresList = () => {
  const [ openAddCategoryModal, setOpenAddCategoryModal ] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenAddCategoryModal(!openAddCategoryModal)
  };

  return (
    <>
      <Card>
        <CardContent className="mt-[29.5px]">
          <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
            <CardHeading
              title="Food Categories"
            />
            <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
              <div className="relative">
                <input type="text" placeholder="Search" className="w-[101px] h-[40px] pl-8 border-[1px] border-[#F4F4D4] rounded-[4px]" />
                <SearchIcon className="absolute top-2 left-1 size-6 text-textColor"/>
              </div>
                <button className="w-[123px] h-[40px] text-ms font-medium bg-buttonColor hover:bg-buttonHover text-white rounded-[4px] max-sm:text-xs" onClick={() => handleOpen()}>Add Category</button>
                <button className="flex items-center px-2 text-ms font-medium gap-2 bg-[#efefef] w-[124px] h-[40px] rounded-[4px] max-sm:hidden">
                  <FileUp className="size-6"/>
                  Export
                  <MdKeyboardArrowDown className="h-6 w-6"/>
                </button>
            </div>
          </div>
          {openAddCategoryModal && (
            <motion.div
              initial={{ opacity: 0, y: 20, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, }}
              className="add-category-modal"
            >
              <AddCategoryModal setOpenModal={handleOpen}/>
            </motion.div>
          )}
          <FoodCategoriesTable columns={columns} data={FoodCategoriesListData}/>
        </CardContent>
      </Card>
    </>
  )
}
