import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CardHeading } from "@/components/card-heading"
import { CustomerList } from "./customer-list"

export const CustomerProfile = () => {
  return (
    <Card className="xl:w-[314px] lg:w-full">
      <CardContent className="mt-[24px]">
      <CardHeading
        title="Customer Profile"
      />
      <div className="relative mt-5">
        <input type="text" placeholder="Search" className="w-[274px] h-[44px] rounded-[4px] pl-[35px]  border-[1px] outline-[#a9adb1]" />
        <SearchIcon className="absolute top-3 left-2 text-[#6F767E] size-[19px]"/>
      </div>
      <CustomerList/>
      </CardContent>
    </Card>
  )
}
