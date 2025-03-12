import { CardHeading } from "@/components/card-heading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const FilterModalContent = () => {
  return (
    <div className="pt-6 pl-6">
      <CardHeading
        title="Filter"
      />
      <div className="flex flex-col gap-6">
        <div className="mt-5 flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-textBlackColor leading-[24px]">Customer</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Customer"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="created-at">Created Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-textBlackColor leading-[24px]">Status</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Status"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-10">
        <button className="w-[132px] h-[48px] text-ms font-semibold leading-[24px] rounded-[4px] border-[1px] border-[#1A1D1F] hover:bg-[#f7f6f6]">Clear Filter</button>
        <button className="w-[136px] h-[48px] text-ms font-semibold leading-[24px] rounded-[4px] bg-buttonColor hover:bg-buttonHover text-white">Apply Filter</button>
      </div>
    </div>
  )
}
