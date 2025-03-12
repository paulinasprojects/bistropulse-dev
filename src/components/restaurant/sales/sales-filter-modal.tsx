import { X } from "lucide-react";
import { CardHeading } from "@/components/card-heading";
import { PriceRangeSlider } from "./price-range-slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props {
  setOpenModal: () => void;
}

export const SalesFilterModal = ({ setOpenModal }: Props) => {
  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between">
        <CardHeading
          title="Filter"
        />
        <X className="cursor-pointer size-5" onClick={setOpenModal}/>
      </div>
      <PriceRangeSlider/>
      <div className="mt-6 ml-2">
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select category"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pizza">Pizza</SelectItem>
            <SelectItem value="burger">Burger</SelectItem>
            <SelectItem value="pasta">Pasta</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-6 ml-2">
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select duration"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="last-6-months">Last 6 Months</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="w-[132px] h-[48px] rounded-[6px] border-[1px] border-[#C0C2C5] text-ms font-semibold">Clear Filter</button>
        <button className="w-[136px] h-[48px] rounded-[6px] bg-buttonColor text-white text-ms font-semibold">Apply Filter</button>
      </div>
    </div>
  )
}
