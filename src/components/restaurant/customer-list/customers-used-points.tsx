import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";
import { Separator } from "@/components/ui/separator";

export const CustomersUsedPoints = () => {
  return (
    <Card>
      <CardContent className="mt-6">
        <CardHeading
          title="Used Points"
        />
        <div className="mt-6">
          <div className="flex gap-3">
            <div className="w-[44px] h-[44px] bg-[#219653] rounded-full">
              <p className="text-white text-[11px] font-bold text-center mt-1.5">Earn Cash</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-medium">Get $50 on your mobile wallet</p>
              <p className="text-sm font-normal text-[#2F80ED]">1000 Points</p>
            </div>
          </div>
            <Separator className="my-4"/>
        </div>
        <div className="">
          <div className="flex gap-3">
            <div className="w-[44px] h-[44px] bg-[#219653] rounded-full">
              <p className="text-white text-[11px] font-bold text-center mt-1.5">Earn Cash</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-medium">Get $50 on your mobile wallet</p>
              <p className="text-sm font-normal text-[#2F80ED]">1000 Points</p>
            </div>
          </div>
            <Separator className="my-4"/>
        </div>
        <div className="">
          <div className="flex gap-3">
            <div className="w-[44px] h-[44px] bg-[#219653] rounded-full">
              <p className="text-white text-[11px] font-bold text-center mt-1.5">Earn Cash</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-medium">Get $50 on your mobile wallet</p>
              <p className="text-sm font-normal text-[#2F80ED]">1000 Points</p>
            </div>
          </div>
            <Separator className="my-4"/>
        </div>
        <div className="">
          <div className="flex gap-3">
            <div className="w-[44px] h-[44px] bg-[#219653] rounded-full">
              <p className="text-white text-[11px] font-bold text-center mt-1.5">Earn Cash</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-medium">Get $50 on your mobile wallet</p>
              <p className="text-sm font-normal text-[#2F80ED]">1000 Points</p>
            </div>
          </div>
            <Separator className="my-4"/>
        </div>
        <div className="">
          <div className="flex gap-3">
            <div className="w-[44px] h-[44px] bg-[#219653] rounded-full">
              <p className="text-white text-[11px] font-bold text-center mt-1.5">Earn Cash</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-medium">Get $50 on your mobile wallet</p>
              <p className="text-sm font-normal text-[#2F80ED]">1000 Points</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
