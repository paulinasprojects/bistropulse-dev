import { CustomersCard } from "../customers-card"
import { DivContainer } from "../div-container"
import { OrderCard } from "../order-card"
import { RankedRestaurantCard } from "../ranked-restaurant-card"
import { RecentOrdersRequests } from "../recent-orders-requests"
import { RestaurantCard } from "../restaurant-card"
import { ReviewCard } from "../reviews-card"
import { RewardsPointsCard } from "../rewards-points-card"
import { RidersCard } from "../riders-card"
import { SalesCard } from "../sales-card"
import { ShiftStatisticsCard } from "../shift-statistics-card"
import { TotalRevenueCard } from "../total-revenue-card"

export const HomeView = () => {
  return (
    <DivContainer>
      <div className="flex flex-col gap-4">
        <OrderCard/>
        <RecentOrdersRequests/>
        <div className="lg:flex xl:flex-row gap-4 md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <TotalRevenueCard/>
          <SalesCard/>
        </div>
        <div className="lg:flex xl:flex-row gap-4 md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <RestaurantCard/>
          <RankedRestaurantCard/>
        </div>
        <div className="">
          <ReviewCard/>
        </div>
        <div className="lg:flex xl:flex-row gap-4 md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <CustomersCard/>
          <RewardsPointsCard/>
        </div>
        <div className="lg:flex xl:flex-row gap-4 md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <ShiftStatisticsCard/>
          <RidersCard/>
        </div>
      </div>
    </DivContainer>
  )
}
