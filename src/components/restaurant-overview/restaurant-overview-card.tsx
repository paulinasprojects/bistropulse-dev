"use client";

import { useState } from "react";
import { ImStarFull } from "react-icons/im";
import { PencilLineIcon } from "lucide-react";
import { CardHeading } from "../card-heading"
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label";
import Image from "next/image";


export const RestaurantOverviewCard = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Card className="xl:max-w-[721px] lg:w-full">
      <CardContent className="mt-[34px]">
        <div className="flex items-center">
          <CardHeading
            title="Restaurant Overview"
          />
          <div className="flex items-center gap-5 ml-auto">
            <div className="flex items-center gap-2">
              <Label htmlFor="switch" className="text-sm font-normal">{isChecked ? "Open": "Closed"}</Label>
            <Switch id="switch" className="w-[30px] h-[18px] data-[state=checked]:bg-green-500" checked={isChecked} onCheckedChange={setIsChecked}/>
            </div>
            <button className="flex items-center justify-center gap-2 bg-buttonColor text-white hover:bg-buttonHover w-[88px] h-[44px] rounded-[4px] font-medium text-ms">
              <PencilLineIcon className="size-6"/>
              Edit
            </button>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1740570983/235fab42-e1df-4627-8f97-17eb561a8da1_gxacki.png"
          alt="restaurant image overview"
          width={673}
          height={330}
          className="mt-7"
        />
        <div className="flex flex-col gap-[15px] mt-5">
          <p className="font-bold text-2xl text-textBlackColor">Star Valley Restaurant</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-xs font-normal text-textColor">
              <ImStarFull className="text-[#F69133] size-3"/>
              5.0 (23 Reviews)
            </span>
            <span className="text-xs font-normal text-textColor">23 Orders</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-md font-bold text-textBlackColor">Established</p>
          <p className="text-sm font-normal text-textColor">Since 01 January 2024</p>
        </div>
          <hr style={{borderTop: "dotted 2.5px", marginTop: "20px"}} />
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-md font-bold text-textBlackColor">Payment Method</p>
          <p className="text-sm font-normal text-textColor">Visa Card</p>
        </div>
          <hr style={{borderTop: "dotted 2.5px", marginTop: "20px"}} />
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-md font-bold text-textBlackColor">Working Period</p>
          <p className="text-sm font-normal text-textColor">9:00 AM - 10:00 PM </p>
        </div>
          <hr style={{borderTop: "dotted 2.5px", marginTop: "20px"}} />
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-md font-bold text-textBlackColor">Location</p>
          <p className="text-sm font-normal text-textColor">G. P. O., Asafoatse Nettey Road, Accra...</p>
        </div>
      </CardContent>
    </Card>
  )
}
