import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/card-heading";
import { AddFoodForm } from "./add-food-form";

export const AddFood = () => {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <CardHeading
          title="Add Food"
        />
        <div className="mt-10 flex max-sm:flex-col items-center lg:flex-row gap-[42px] xl:px-[227px] max-sm:items-center">
        <label htmlFor="inputField" className="w-[328px] lg:h-[155px] md:h-[120px] max-sm:h-[130px] border-[1px] border-dotted border-[#2A85FF] rounded-[8px] flex items-center justify-center cursor-pointer">
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
          <AddFoodForm/>
        </div>
      </CardContent>
    </Card>
  )
}
