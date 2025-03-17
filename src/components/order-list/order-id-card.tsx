import { Card, CardContent } from "@/components/ui/card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Printer } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";



export const OrderIdCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="mt-[22px] max-sm:!p-3">
        <div className="flex flex-col gap-[22px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="lg:text-lg md:text-sm max-sm:text-sm font-semibold text-[#111315]">Order Id #12009</p>
              <p className="p-1 rounded-[4px] text-center pt-0.5 bg-[#e1edfe] text-[#4493FD] text-sm max-sm:text-xxs md:text-xs max-sm:whitespace-nowrap font-semibold">On the way</p>
              <p className="text-[#6F767E] font-normal text-sm ml-4">
                Ralph Edwards
              </p>
              <p className="lg:ml-[30px] text-sm font-normal text-[#6F767E]">Sat, Nov 28 • 08:30 PM</p>
            </div>
            <div className="flex items-center gap-[15px] max-sm:hidden">
              <FaArrowLeft className="cursor-pointer"/>
              <FaArrowRight className="cursor-pointer"/>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center border-[1px] border-[#efefef] p-2 rounded-[4px]">
                <Printer className="size-5"/>
              </button>
              <button className="flex items-center gap-2 text-[#6F767E] lg:text-md md:text-sm max-sm:text-xs justify-center border-[1px] border-[#efefef] p-2 rounded-[4px]">
                Assign Deliveryman
                <MdKeyboardArrowDown/>
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="flex items-center gap-2 justify-center lg:text-md max-sm:text-xs font-normal text-[#6F767E] border-[1px] border-[#efefef] px-2 py-1.5 rounded-[4px]">
                Payment
                <MdKeyboardArrowDown/>
              </button>
              <button className="flex items-center gap-2 justify-center lg:text-md max-sm:text-xs font-normal text-[#6F767E] border-[1px] border-[#efefef] py-1.5 px-2 rounded-[4px]">
                Status
                <MdKeyboardArrowDown/>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
