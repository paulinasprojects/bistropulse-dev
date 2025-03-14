import { X } from "lucide-react";
import { CardHeading } from "@/components/card-heading";
import { PriceRangeSlider } from "./price-range-slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
        <Label htmlFor="category-type" className="block mb-2.5 text-sm font-medium">
          Category
        </Label>
        <Select>
          <SelectTrigger id="category-type" className="w-[280px]">
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
        <Label htmlFor="duration" className="block mb-2.5 text-sm font-medium">
          Duration
        </Label>
        <Select>
          <SelectTrigger id="duration" className="w-[280px]">
            <SelectValue placeholder="Select duration"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="last-6-months">Last 6 Months</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <button className="w-[132px] h-[48px] rounded-[6px] border-[1px] border-[#C0C2C5] hover:bg-slate-50 transition-colors duration-75 text-ms font-semibold" onClick={setOpenModal}>Clear Filter</button>
        <button className="w-[136px] h-[48px] rounded-[6px] bg-buttonColor hover:bg-buttonHover text-white text-ms font-semibold transition-colors duration-75" onClick={setOpenModal}>Apply Filter</button>
      </div>
    </div>
  )
}
