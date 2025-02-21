/* eslint-disable @next/next/no-img-element */
import { rankedRestaurantsData } from '@/lib/data';
import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';


export const RankedRestaurantCard = () => {
  return (
    <Card className="xl:max-w-[500px] lg:w-full">
    <CardContent className='mt-[27px]'>
      <div className="flex items-center justify-between">
        <CardHeading
          title='Ranked Restaurants'
        />
        <button>See all</button>
      </div>
        <div className="w-full flex flex-col gap-3 mt-[25px]">
          {rankedRestaurantsData.map((data) => (
            <div className="bg-[#EFEFEF] p-4" key={data.restaurantOrders}>
              <div className="flex items-center gap-4">
                <img
                  src={data.image}
                  className='w-[56px] h-[56px] object-cover rounded-[6px] max-sm:hidden'
                  alt='restaurant-image'
                />
                <div className="flex flex-col item gap-2">
                  <p className='text-[16px] font-semibold text-[#111315]'>{data.restaurantName}</p>
                  <p className='text-[12px] font-normal text-[#6F767E]'>{data.restaurantAdress}</p>
                </div>
                <div className="ml-auto">
                  <p className='text-xl font-bold text-[#111315]'>{data.restaurantOrders}</p>
                  <p className='text-[12px] font-normal text-[#6F767E]'>Orders</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </CardContent>
  </Card>
  )
}
