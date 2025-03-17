import { forwardRef } from "react";
import { X } from "lucide-react";
import { CardHeading } from "@/components/card-heading";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PriceRangeSlider } from "../restaurant/sales/price-range-slider";
import { Label } from "../ui/label";


interface Props {
  setOpenModal: () => void;
};

export const OrderListFilterModal = forwardRef<HTMLDivElement, Props>(({ setOpenModal }, ref) => {
  return (
    <div className="px-6 py-6" ref={ref}>
      <div className="flex items-center justify-between">
        <CardHeading
          title="Filter"
        />
        <X className="cursor-pointer size-5" onClick={setOpenModal}/>
      </div>
      <div className="mt-[32px]">
        <PriceRangeSlider/>
      </div>
      <div className="mt-6 ml-2">
        <Label htmlFor="status-type" className="block mb-2.5 text-sm font-medium">Status</Label>
        <Select>
          <SelectTrigger id="status-type" className="w-[280px]">
            <SelectValue placeholder="Select Status"/>
          </SelectTrigger>
          <SelectContent className="select-content">
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="preparing">Preparing</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="on-the-way">On the way</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="w-[132px] h-[48px] rounded-[6px] border-[1px] border-[#C0C2C5] hover:bg-slate-50 transition-colors duration-75 text-ms font-semibold" onClick={setOpenModal}>Clear Filter</button>
        <button className="w-[136px] h-[48px] rounded-[6px] bg-buttonColor hover:bg-buttonHover text-white text-ms font-semibold transition-colors duration-75" onClick={setOpenModal}>Apply Filter</button>
      </div>
    </div>
  )
});

OrderListFilterModal.displayName = "OrderListFilterModal";