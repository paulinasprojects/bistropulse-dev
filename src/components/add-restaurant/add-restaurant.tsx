import { Card, CardContent } from "../ui/card";
import { CardHeading } from "../card-heading";
import { Plus } from "lucide-react";
import { AddRestaurantForm } from "./add-restaurant-form";
export const AddRestaurant = () => {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <CardHeading
          title="Add Restaurant"
        />
        <div className="create-event-input-container | mt-10 flex items-center justify-center gap-[32px] md:flex-col max-sm:flex-col lg:flex-row">
          <label htmlFor="inputField" className="w-[328px] h-[155px] border-[1px] border-dotted border-[#2A85FF] rounded-[8px] flex items-center justify-center cursor-pointer">
            <p className="text-[#2A85FF] text-sm font-medium">+ Add Photo</p>
          </label>
          <input type="file"  className="file-button" title=" " style={{display: "none"}} id="inputField"/>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2A85FF] hover:bg-[#4291f8] text-white rounded-[4px] w-[179px] h-[44px] text-[15px] font-bold">
              <Plus/>
              Restaurant Image
            </button>
            <button className="w-[93px] h-[44px] bg-transparent border-[1px] border-[#EFEFEF] rounded-[4px] hover:bg-[#EFEFEF]">Remove</button>
          </div>
        </div>
        <div className="mt-5">
          <AddRestaurantForm/>
        </div>
      </CardContent>
    </Card>
  )
}
