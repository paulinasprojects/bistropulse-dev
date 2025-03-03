import { Card, CardContent } from "../ui/card";
import { CardHeading } from "../card-heading";

import { AddCustomerForm } from "@/components/add-customer/add-customer-form"
import { Plus, UserPlusIcon } from "lucide-react";

export const AddCustomer = () => {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <CardHeading
          title="Add Customer"
        />
        <div className="mt-10 flex max-sm:flex-col lg:flex-row gap-[42px] xl:px-[227px] max-sm:items-center">
          <label htmlFor="add-customer-input" className="flex items-center justify-center rounded-full w-[96px] h-[96px] bg-[#EFEFEF] cursor-pointer">
            <UserPlusIcon className="w-[32px] h-[32px] text-[#6F767E]"/>
          </label>
          <input type="file" className="" title=" " id="add-customer-input" style={{display: "none"}} />
          <div className="flex gap-2 items-center">
            <button className="flex items-center justify-center gap-2 text-white bg-[#2A85FF] hover:bg-[#4291f8] w-[191px] h-[44px] rounded-[4px]"> <Plus/> Upload new picture</button>
            <button className="text-[#1A1D1F] bg-transparent border-[1px] border-[#E5E5E5] rounded-[4px] w-[93px] h-[44px]">Remove</button>
          </div>
        </div>
        <div className="mt-5">
          <AddCustomerForm/>
        </div>
      </CardContent>
    </Card>
  )
}
