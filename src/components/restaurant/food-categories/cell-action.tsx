"use client";

import { Pencil,Trash2 } from "lucide-react";
import { FoodCategoriesListProps } from "./columns";

interface Props {
  data: FoodCategoriesListProps;
}

export const CellAction = ({ data }: Props) => {
  return (
    <div className="">
      <div className="flex gap-4">
        <Pencil className="size-5 cursor-pointer"/>
        <Trash2 className="size-5 cursor-pointer"/>
      </div>
    </div>
  )
}
