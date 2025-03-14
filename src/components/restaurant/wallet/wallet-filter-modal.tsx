import { X } from "lucide-react";
import { CardHeading } from "@/components/card-heading";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface WalletFilterModalProps {
  setOpenModal: () => void
}

export const WalletFilterModal = ({ setOpenModal }: WalletFilterModalProps) => {
  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between">
        <CardHeading
          title="Filter"
        />
        <X className="cursor-pointer size-5 hover:text-textColor" onClick={setOpenModal}/>
      </div>
      <div className="mt-6">
        <Label htmlFor="date" className="block mb-2.5 text-sm font-medium">
          Date
        </Label>
        <Input type="date" required placeholder="Select Date" className="w-[280px] h-[48px] rounded-[6px]"/>
      </div>
      <div className="mt-6">
        <Label htmlFor="wallet-type" className="block mb-2.5 text-sm font-medium">
          Type
        </Label>
        <Select>
          <SelectTrigger id="wallet-type" className="w-[280px]">
            <SelectValue placeholder="Select type"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="earning">Earning</SelectItem>
            <SelectItem value="withdrawal">Withdrawal</SelectItem>
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
