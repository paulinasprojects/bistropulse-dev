import { RestaurantManagementTable } from "@/components/restaurant-management/restaurant-management-table"

const RestaurantManagementPage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen  pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px] pb-6">
      <RestaurantManagementTable/>
    </div>
  )
}

export default RestaurantManagementPage