import { RepresentitiveCard } from "@/components/restaurant-overview/representitive-card"
import { RestaurantOverviewCard } from "@/components/restaurant-overview/restaurant-overview-card"

const RestaurantOverviewPage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px] pb-6">
      <div className="flex gap-4 xl:flex-row  md:flex-col max-sm:flex-col">
        <RestaurantOverviewCard/>
        <RepresentitiveCard/>
      </div>
    </div>
  )
}

export default RestaurantOverviewPage