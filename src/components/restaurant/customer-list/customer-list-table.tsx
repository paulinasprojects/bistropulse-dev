"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SearchIcon, Filter, FileUp, X } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CustomersListData } from "@/lib/data";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/lib/use-click-outside";
import { FilterModalContent } from "./filter-modal-content";
import { CustomersTable } from "./customers-table";
import { columns } from "./columns";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";


export const CustomerListTable = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenFilterModal(!openFilterModal);
  };

  useClickOutside(ref, () => setOpenFilterModal(false), "select-content");


  const router = useRouter();

  return (
    <>
      <Card className="w-full py-[31px]">
        <CardContent>
          <div className="flex items-center lg:flex-row max-sm:flex-col md:flex-col max-sm:gap-4 md:gap-4">
            <CardHeading
              title="Customer"
            />
            <div className="flex items-center gap-2 lg:ml-auto max-sm:ml-5">
              <div className="relative">
                <input type="text" placeholder="Search" className="w-[104px] h-[40px] pl-8 border-[1px] border-[#F4F4D4] rounded-[4px]" />
                <SearchIcon className="absolute top-2 left-1 size-6 text-textColor"/>
              </div>
              <button className="flex items-center justify-center gap-2 border-[1px] border-[#f4f4f4] rounded-[4px] w-[87px] h-[40px] px-2 text-ms font-normal text-[#9A9FA5]" onClick={() => toggleModal()}>
                {openFilterModal ? (
                  <X className="size-6 text-textColor"/>
                ) : (
                  <Filter className="size-6 text-textColor"/>
                )}
                Filter
              </button>
              <button className="w-[134px] h-[40px] text-ms font-medium bg-buttonColor hover:bg-buttonHover text-white rounded-[4px]  max-sm:text-xs" onClick={() => router.push("/restaurant-management/restaurant/1/customer-list/add-customer")}>Add Customer</button>
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
              className="customer-filter"
              ref={ref}
            >
              <FilterModalContent setOpenModal={toggleModal}/>
            </motion.div>
          )}
          <CustomersTable columns={columns} data={CustomersListData}/>
        </CardContent>
      </Card>
    </>
  )
}
