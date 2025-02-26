import { DocumentsCard } from "@/components/restaurant-overview/documents-card"
import { RepresentitiveCard } from "@/components/restaurant-overview/representitive-card"
import { RestaurantOverviewCard } from "@/components/restaurant-overview/restaurant-overview-card"

const RestaurantOverviewPage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px] pb-6">
      <div className="flex gap-4 xl:flex-row  md:flex-col max-sm:flex-col">
        <RestaurantOverviewCard/>
        <div className="flex flex-col gap-4 xl:w-[395px] md:w-full">
          <RepresentitiveCard/>
          <DocumentsCard/>
        </div>
      </div>
    </div>
  )
}

export default RestaurantOverviewPage