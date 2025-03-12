import { DivContainer } from "@/components/div-container"
import { DocumentsCard } from "@/components/restaurant-overview/documents-card"
import { RepresentitiveCard } from "@/components/restaurant-overview/representitive-card"
import { RestaurantOverviewCard } from "@/components/restaurant-overview/restaurant-overview-card"

const RestaurantOverviewPage = () => {
  return (
    <DivContainer>
      <div className="flex gap-4 xl:flex-row  md:flex-col max-sm:flex-col">
        <RestaurantOverviewCard/>
        <div className="flex flex-col gap-4 xl:w-[395px] md:w-full">
          <RepresentitiveCard/>
          <DocumentsCard/>
        </div>
      </div>
    </DivContainer>
  )
}

export default RestaurantOverviewPage