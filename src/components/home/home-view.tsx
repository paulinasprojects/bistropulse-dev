import { OrderCard } from "../order-card"
import { RecentOrdersRequests } from "../recent-orders-requests"
import { SalesCard } from "../sales-card"
import { TotalRevenueCard } from "../total-revenue-card"

export const HomeView = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px]">
      <div className="flex flex-col gap-4">
        <OrderCard/>
        <RecentOrdersRequests/>
        <div className="lg:flex xl:flex-row gap-4 md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <TotalRevenueCard/>
          <SalesCard/>
        </div>
      </div>
    </div>
  )
}
