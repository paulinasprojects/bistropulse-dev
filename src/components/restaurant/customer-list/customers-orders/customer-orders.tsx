import { SearchIcon, LayoutGrid } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";
import { CustomerOrdersTable } from "./customer-orders-table";
import { CustomerOrdersData } from "@/lib/data";
import { columns } from "./columns";

export const CustomerOrders = () => {
  return (
    <Card className="w-full">
      <CardContent className="mt-6">
        <div className="flex justify-between">
          <CardHeading title="Customer"/>
          <div className="flex gap-2">
            <div className="relative">
              <input type="text" placeholder="Search" className="pl-[27px] w-[100px] h-[40px] rounded-[4px] border-[#EFEFEF] border-[1px]" />
              <SearchIcon className="absolute top-2.5 left-1.5 size-[19px] text-[#6F767E]"/>
            </div>
            <button className="flex items-center justify-center w-10 h-10 border-[#EFEFEF] border-[1px] hover:bg-[#EFEFEF]">
              <LayoutGrid className="text-[#6F767E]"/>
            </button>
          </div>
        </div>
        <CustomerOrdersTable columns={columns} data={CustomerOrdersData} />
      </CardContent>
    </Card>
  )
}
