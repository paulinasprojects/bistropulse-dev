import { CustomerProfile } from "@/components/restaurant/customer-list/customer-profile"
import { CustomerProfileTabs } from "@/components/restaurant/customer-list/customer-profile-tabs"

const CustomerIdPage = () => {
  return (
    <div className="flex xl:flex-row md:flex-col max-sm:flex-col gap-4 bg-[#F4F4F4] min-h-screen  pl-[24px] pt-[16px] md:pl-[12px] md:pr-[12px] max-sm:pl-[12px] max-sm:pr-[12px] pb-6">
      <CustomerProfile/>
      <CustomerProfileTabs/>
    </div>
  )
}

export default CustomerIdPage