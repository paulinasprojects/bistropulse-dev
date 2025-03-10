"use client";

import { useState } from "react";
import { ImStarFull } from "react-icons/im";
import { TiHeartFullOutline } from "react-icons/ti";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { CustomersFavoriteRestaurantsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const CustomersFavoriteRestaurants = () => {
  const [likedRestaurants, setLikedRestaurants] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikedRestaurants((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid xl:grid-cols-240 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-2 gap-[41px]">
      {CustomersFavoriteRestaurantsData.map((data) => (
       <Card key={data.id}>
        <CardContent className="!p-0">
          <div>
            <div className="relative">
              <Image
                width={240}
                height={140}
                alt={data.name}
                src={data.image}
                className="rounded-tl-[8px] rounded-tr-[8px] cursor-pointer"
              />
              <div className="absolute top-2 left-0  w-[65px] h-[23px] rounded-tr-[6px] rounded-br-[6px] bg-[#27AE60] text-center">
                <p className="text-[12px] font-bold text-white mt-0.5">{data.discount}% OFF</p>
              </div>
              <div className="absolute w-[24px] h-[24px] bg-white rounded-full top-2 right-2 flex items-center justify-center" onClick={() => toggleLike(data.id)}>
                <TiHeartFullOutline className="cursor-pointer size-4 transition-colors duration-300"  color={likedRestaurants[data.id] ? "black" : "red"}/>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2.5 px-2.5">
              <div className="flex  gap-0.5">
                <p className="text-sm font-bold text-[#131313]">{data.name}</p>
              </div>
                <div className="flex items-center gap-[2.5px]">
                <ImStarFull className="size-2.5 text-[#F69133]"/>
                <p className="text-[12px] font-medium">{data.rating}</p>
              </div>
              </div>
                <div className="flex gap-2  pl-2.5 mt-[3px] mb-2">
                <p className="text-[12px] font-medium text-[#828282]">{data.deliveryTime} •</p>
                <p className="flex items-center gap-[4px] text-[12px] font-medium text-[#828282]">
                  <MapPin className="size-2.5"/>
                  {data.location}
                </p>
                </div>
          </div>
        </CardContent>
      </Card>
      ))} 
    </div>
  )
}
