import { homepageOrders } from "@/lib/data"
import { Card, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";

export const OrderCard = () => {
  return (
    <div className="xl:flex gap-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 max-sm:flex max-sm:flex-col">
      {homepageOrders.map((data) => (
        <Card key={data.id} className="shadow-sm">
          <CardContent>
            <div className="flex items-center gap-4 mt-[16px]">
              <div className={cn(data.className, `flex items-center justify-center rounded-[11px] xl:w-[75px] xl:h-[75px] md:w-[50px] md:h-[50px] shadow-md`)}>
                <data.icon className={cn(`xl:w-[40px] xl:h-[40px] md:h-[30px] md:w-[30px]`)}/>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-normal text-[16px] text-[#6F767E] leading-[20px] md:whitespace-nowrap">{data.title}</span>
                <span className="font-bold lg:text-2xl leading-[38px] text-[#111315] md:text-lg">{data.count}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
