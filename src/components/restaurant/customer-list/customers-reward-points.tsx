import { CustomersAvailablePoints } from "./customers-available-points"
import { CustomersUsedPoints } from "./customers-used-points"

export const CustomersRewardPoints = () => {
  return (
    <div className="grid xl:grid-cols-393 max-sm:grid-cols-1 gap-[22px]">
      <CustomersAvailablePoints/>
      <CustomersUsedPoints/>
    </div>
  )
}
