"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, FileUp, X } from "lucide-react"
import { WalletData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { CardHeading } from "@/components/card-heading"
import { MdKeyboardArrowDown } from "react-icons/md"
import { WalletDataTable } from "./wallet-data-table"
import { columns } from "./columns";
import { WalletFilterModal } from "./wallet-filter-modal";


export const WalletCard = () => {
  const [openFilterModal, setOpenFilterModal]  = useState<boolean>(false);

  const openModal = () => {
    setOpenFilterModal(!openFilterModal)
  };


  return (
    <Card>
      <CardContent className="mt-[30px]">
        <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
          <CardHeading
            title="Transactions"
          />
          <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
            <div className="relative">
              <input type="text" placeholder="Search" className="w-[101px] h-[40px] pl-8 border-[1px] border-[#f4f4d4] rounded-[4px]" />
              <Search className="absolute top-2 left-1 size-6 text-textColor"/>
            </div>
            <button className="flex items-center justify-center gap-2 border-[1px] border-[#f4f4f4] rounded-[4px] w-[87px] h-[40px] px-2 text-sm font-normal text-[#9A9FA5]" onClick={() => openModal()}>
              {openFilterModal ? (
                <X className="size-6 text-textColor"/>
              ): (
              <Filter className="size-6 text-textColor"/>
              )}
              Filter
            </button>
            <button className="flex items-center px-2 text-ms font-medium gap-2 bg-[#efefef] w-[114px] h-[40px] rounded-[4px] max-sm:hidden">
              <FileUp className="size-6"/>
                Export
              <MdKeyboardArrowDown className="size-5"/>
            </button>
          </div>
        </div>
        {openFilterModal && (
          <motion.div
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.2 }}
            className="wallet-filter"
          >
            <WalletFilterModal
              setOpenModal={openModal}
            />
          </motion.div>
        )}
        <WalletDataTable columns={columns} data={WalletData}/>
      </CardContent>
    </Card>
  )
}
