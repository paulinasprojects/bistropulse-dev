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
          <p className="text-sm font-semibold text-textBlackColor leading-[24px]">Location</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Location"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-semibold text-textBlackColor leading-[24px]">Rating</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Rating"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="five">5.0</SelectItem>
              <SelectItem value="below-4.5">Below 4.5</SelectItem>
              <SelectItem value="below-3.0">Below 3.0</SelectItem>
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
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button className="w-[132px] h-[48px] text-ms font-semibold leading-[24px] rounded-[4px] border-[1px] border-[#1A1D1F] hover:bg-[#f7f6f6]">Clear Filter</button>
        <button className="w-[136px] h-[48px] text-ms font-semibold leading-[24px] rounded-[4px] bg-buttonColor hover:bg-buttonHover text-white">Apply Filter</button>
      </div>
    </div>
  )
}
