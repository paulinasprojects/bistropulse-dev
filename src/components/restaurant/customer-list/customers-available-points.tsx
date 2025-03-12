import Image from "next/image";
import { CardHeading } from "@/components/card-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CustomersAvailablePoints = () => {
  return (
    <Card>
    <CardContent className="mt-6">
      <CardHeading
        title="Available Points"
      />
      <div className="mt-6 border-[1px] border-[#deeafc] p-4 rounded-[14px]">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center w-[75px] h-[75px] bg-[#deeafc] rounded-[11px]">
            <Image
              src="/shield.png"
              alt="shield"
              width={34}
              height={46}
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-md font-normal text-[#818C99]">Reward Points</p>
            <p className="text-2xl font-bold">2770</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold">How to earn points?</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 mt-4">
            <p className="font-medium text-md">Star Valley Restaurant</p>
            <p className="text-sm font-normal text-textColor">Spent $80</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-[20px] px-2 py-1.5">
            <p className="text-xs font-medium text-[#272B30]">120 Points</p>
          </div>
        </div>
        <Separator className="my-4"/>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="font-medium text-md">Burger King</p>
            <p className="text-sm font-normal text-textColor">Spent $80</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-[20px] px-2 py-1.5">
            <p className="text-xs font-medium text-[#272B30]">120 Points</p>
          </div>
        </div>
        <Separator className="my-4"/>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="font-medium text-md">The Chef Squad</p>
            <p className="text-sm font-normal text-textColor">Spent $80</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-[20px] px-2 py-1.5">
            <p className="text-xs font-medium text-[#272B30]">120 Points</p>
          </div>
        </div>
        <Separator className="my-4"/>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="font-medium text-md">Habib Restaurant</p>
            <p className="text-sm font-normal text-textColor">Spent $80</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-[20px] px-2 py-1.5">
            <p className="text-xs font-medium text-[#272B30]">120 Points</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}
