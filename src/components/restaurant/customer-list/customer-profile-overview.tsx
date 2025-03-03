import Image from "next/image";
import { Pencil } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"

export const CustomerProfileOverview = () => {
  return (
    <Card className="xl:max-w-[376px] max-sm:w-full">
      <CardContent className="mt-6">
        <div className="flex items-center justify-between">
          <button className="text-white bg-[#27AE60] w-[58px] h-[24px] rounded-[4px] text-[14px] font-medium hover:bg-[#32d274] transition-all">Active</button>
          <Switch id="switch" className="w-[30px] h-[18px] data-[state=checked]:bg-green-500" defaultChecked/>
        </div>
        <div className="flex flex-col items-center mt-6">
          <Image
            src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1740999821/b3ab488c-1b6e-4426-aeed-094e359dfd65_imd25o.png"
            alt="image"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2 items-center mt-3">
            <p className="text-[#1A1D1F] text-xl font-bold">Chelsie Johnson</p>
            <p className="text-[#6F767E] text-[15px] font-normal">chelsiejhonson@example.com</p>
          </div>
          <button className="flex items-center justify-center gap-2 mt-5 rounded-[4px] bg-[#2A85FF] hover:bg-[#4291f8] text-white w-[136px] h-[44px] text-[15px] font-medium">
            <Pencil/>
            Edit profile
          </button>
        </div>
        <div className="flex flex-col gap-[14px] mt-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#6F767E] font-normal">Phone Number</p>
            <p className="font-semibold text-[16px] text-[#33383F]">+88 01600-009770</p>
            <Separator/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#6F767E] font-normal">University</p>
            <p className="font-semibold text-[16px] text-[#33383F]">University of Canada</p>
            <Separator/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#6F767E] font-normal">Location</p>
            <p className="font-semibold text-[16px] text-[#33383F]">Asafoatse Nettey Road, Accra...</p>
            <Separator/>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
