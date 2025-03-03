import { CustomerProfileOverview } from "./customer-profile-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  {
    value: "overview",
    title: "Overview",
  },
  {
    value: "orders",
    title: "Orders",
  },
  {
    value: "fav restaurants",
    title: "Fav Restaurants",
  },
  {
    value: "reviews & ratings",
    title: "Reviews & Ratings",
  },
  {
    value: "reward points",
    title: "Reward Points",
  },
]

export const CustomerProfileTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="bg-white xl:flex md:grid max-sm:grid md:grid-cols-3 max-sm:grid-cols-1 gap-2 justify-normal">
        {tabsData.map((data) => (
          <TabsTrigger
            key={data.value}
            value={data.value}
            className="data-[state=active]:text-[#2A85FF] data-[state=active]:border-b-[1.5px] data-[state=active]:border-[#2A85FF] data-[state=active]:shadow-none rounded-none bg-white"
          >
            {data.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview" className="max-sm:mt-[200px] md:mt-16 xl:mt-4">
        <CustomerProfileOverview/>
      </TabsContent>
    </Tabs>
  )
}
