import { ImStarFull, ImStarEmpty } from "react-icons/im";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { CustomersReviewsAndRatingsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";


export const CustomersReviewsAndRatings = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {CustomersReviewsAndRatingsData.map((data) => (
        <Card key={data.id}>
            <CardContent className="pt-[16px] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{data.id}</p>
                <Ellipsis className="cursor-pointer"/>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-[16px] font-semibold text-[#131313]">{data.restaurantName}</p>
                <div className="flex items-center gap-1.5 text-[#6F767E] text-[12px] font-normal">
                  <p className="">{data.reviewDate}</p>
                    •
                    <p>{data.reviewTime}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={data.dishImage}
                    alt={data.dishName}
                    width={46}
                    height={46}
                    className="hidden md:block"
                  />
                  <div className="flex item flex-col">
                    <p className="text-[15px] font-medium text-[#333]">
                      {data.dishName}
                    </p>
                    <p className="text-sm font-normal text-[#6F767E]">{data.review}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <ImStarFull className="text-[#FFC451]"/>
                  <ImStarFull className="text-[#FFC451]"/>
                  <ImStarFull className="text-[#FFC451]"/>
                  <ImStarFull className="text-[#FFC451]"/>
                  <ImStarEmpty/>
                  <p className="text-[#6F767E] text-[12px] font-normal">(Good)</p>
                </div>
              </div>
            </CardContent>
        </Card>
      ))}
    </div>
  )
}
