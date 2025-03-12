import { CustomerOrders } from "./customers-orders/customer-orders";
import { CustomerProfileOverview } from "./customer-profile-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomersFavoriteRestaurants } from "./customer-favorite-restaurants";
import { CustomersReviewsAndRatings } from "./customers-reviews-and-ratings";
import { CustomersRewardPoints } from "./customers-reward-points";

const tabsData = [
  {
    value: "overview",
    title: "Overview",
  },
  {
    value: "customer-orders",
    title: "Orders",
  },
  {
    value: "favorite-restaurants",
    title: "Fav Restaurants",
  },
  {
    value: "reviews-ratings",
    title: "Reviews & Ratings",
  },
  {
    value: "reward-points",
    title: "Reward Points",
  },
]

export const CustomerProfileTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="bg-white xl:flex md:grid max-sm:grid md:grid-cols-3 max-sm:grid-cols-1 justify-normal">
        {tabsData.map((data) => (
          <TabsTrigger
            key={data.value}
            value={data.value}
            className="data-[state=active]:text-buttonColor data-[state=active]:border-b-[1.5px] data-[state=active]:border-buttonColor data-[state=active]:shadow-none rounded-none bg-white text-ms text-textColor"
          >
            {data.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomerProfileOverview/>
      </TabsContent>
      <TabsContent value="customer-orders" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomerOrders/>
      </TabsContent>
      <TabsContent value="favorite-restaurants" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomersFavoriteRestaurants/>
      </TabsContent>
      <TabsContent value="reviews-ratings" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomersReviewsAndRatings/>
      </TabsContent>
      <TabsContent value="reward-points" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomersRewardPoints/>
      </TabsContent>
    </Tabs>
  )
}
