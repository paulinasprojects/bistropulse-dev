import { CardHeading } from "../card-heading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const FilterModalContent = () => {
  return (
    <div className="pt-6 pl-6">
      <CardHeading
        title="Filter"
      />
      <div className="flex flex-col gap-6">
        <div className="mt-5 flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-[#1A1D1F] leading-[24px]">Location</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-[#1A1D1F] leading-[24px]">Rating</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-[#1A1D1F] leading-[24px]">Status</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button className="w-[132px] h-[48px] text-[15px] font-semibold leading-[24px] rounded-[4px] border-[1px] border-[#1A1D1F] hover:bg-[#f7f6f6]">Clear Filter</button>
        <button className="w-[136px] h-[48px] text-[15px] font-semibold leading-[24px] rounded-[4px] bg-[#2A85FF] hover:bg-[#4291f8] text-white">Apply Filter</button>
      </div>
    </div>
  )
}
