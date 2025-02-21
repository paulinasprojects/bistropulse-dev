import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
 
const tabsData = [
  {
    value: "today",
    title: "Today"
  },
  {
    value: "yesterday",
    title: "Yesterday"
  },
  {
    value: "last-week",
    title: "Last Week"
  },
  {
    value: "last-month",
    title: "Last Month"
  },
]

export const RestaurantTabs = () => {
  return (
    <Tabs defaultValue="today" className="mt-[26px]">
      <TabsList className="bg-transparent flex gap-2 justify-normal">
        {tabsData.map((data) => (
        <TabsTrigger 
          key={data.value} 
          value={data.value} 
          className="data-[state=active]:bg-[#2A85FF] data-[state=active]:text-white  border-[1px] border-[#EFEFEF] text-sm text-[#33383F]"
          >
          {data.title}
        </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="today" className="mt-[51px]">
        <div className="flex flex-col gap-5">
        <div className="bg-[#EFEFEF] rounded-[6px] p-4 w-full">
          <div className="flex justify-between">
            <div className="flex gap-[26px]">
              <div className="bg-[#d1dff1] w-[125px] h-[127px] flex items-center justify-center rounded-[11px]">
                <Image
                  src="/medium-logo.svg"
                  alt="logo"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#818C99] font-normal text-[16px] leading-[20px]">Pending Restaurants</p>
                <p className="font-bold text-2xl leading-[38px] text-[#111315]">2390</p>
              </div>
            </div>
              <EllipsisVertical className="cursor-pointer"/>
          </div>
        </div>
          <div className="flex gap-4">
            <div className="bg-[#EFEFEF] w-full rounded-[6px] p-4">
              <div className="flex flex-col gap-2">
                <p className="text-[#818C99] font-normal text-[16px] leading-[20px]">Open Restaurants</p>
                <p className="font-bold text-2xl leading-[38px] text-[#111315]">2770</p>
              </div>
            </div>
            <div className="bg-[#EFEFEF] w-full rounded-[6px] p-4">
              <div className="flex flex-col gap-2">
              <p className="text-[#818C99] font-normal text-[16px] leading-[20px]">Closed Restaurants</p>
              <p className="font-bold text-2xl leading-[38px] text-[#111315]">2770</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="yesterday" className="mt-[51px]">Change your password here.</TabsContent>
      <TabsContent value="last-week" className="mt-[51px]">Last week.</TabsContent>
      <TabsContent value="last-month" className="mt-[51px]">Last month.</TabsContent>
    </Tabs>

  )
}
