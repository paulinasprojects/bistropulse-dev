import { salesData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"

export const SalesCardContent = () => {
  return (
    <div className="mt-[85px]">
      <div className="flex flex-col gap-[60px] xl:ml-[67px] max-sm:ml-[20px] mr-[24px]">
        {salesData.map((data) => (
          <div key={data.count}>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-md font-normal text-textColor leading-[20px]">{data.title}</span>
                <span className="xl:text-3xl md:text-2xl font-bold leading-[38px] text-textBlackColor">{data.count}</span>
              </div>
              <div className={cn(`flex items-center rounded-[4px] w-[60px] h-[24px] ${data.className}`)}>
                <ArrowUp className="size-3"/>
               <span className="text-sm"> {data.percent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
