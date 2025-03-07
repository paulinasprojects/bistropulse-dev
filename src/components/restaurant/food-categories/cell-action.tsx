"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Pencil,Trash2 } from "lucide-react";
import { FoodCategoriesListProps } from "./columns";
import { DeleteCategoryModal } from "./delete-category-modal";
import { EditCategoryModal } from "./edit-category-modal";

interface Props {
  data: FoodCategoriesListProps;
}

export const CellAction = ({ data }: Props) => {
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState<boolean>(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenDeleteCategoryModal(!openDeleteCategoryModal)
  }

  const handleEditModalOpen = () => {
    setOpenEditCategoryModal(!openEditCategoryModal)
  }

  return (
    <div className="">
      <div className="flex gap-4">
        <Pencil className="size-5 cursor-pointer" onClick={() => handleEditModalOpen()}/>
        <Trash2 className="size-5 cursor-pointer" onClick={() => handleOpen()}/>
      </div>
      {openDeleteCategoryModal && (
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.2}}
          className="add-category-modal"
        >
          <DeleteCategoryModal setOpenModal={handleOpen}/>
        </motion.div>
      )}
      {openEditCategoryModal && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{  opacity: 1, y: 0}}
          transition={{duration: 0.2}}
          className="add-category-modal"
        >
          <EditCategoryModal setOpenModal={handleEditModalOpen} name={data.name}/>
        </motion.div>
      )}
    </div>
  )
}
