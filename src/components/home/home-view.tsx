import { OrderCard } from "../order-card"
import { RecentOrdersRequests } from "../recent-orders-requests"

export const HomeView = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px]">
      <div className="flex flex-col gap-4">
        <OrderCard/>
        <RecentOrdersRequests/>
      </div>
    </div>
  )
}
