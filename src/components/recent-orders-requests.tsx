import { Card, CardContent } from '@/components/ui/card';
import { CardHeading } from "./card-heading";
import { FilterIcon } from 'lucide-react';
import { RecentOrdersTable } from './recent-orders-table';

export const RecentOrdersRequests = () => {
  return (
    <div>
     <Card className='max-w-[1090px]'>
      <CardContent className='mt-[27px]'>
       <div className="flex items-center justify-between">
          <CardHeading
              title="Recent Orders Requests"
          />
          <div className='flex items-center gap-4'>
            <button>See all</button>
            <input type="text" className='w-[100px] h-[40px] rounded-[6px] border-[1px] border-[#EFEFEF] pl-4' placeholder='Search' />
            <button className='size-10 border-[1px] border-[#EFEFEF] flex items-center justify-center rounded-[6px] bg-[#EFEFEF]'>
              <FilterIcon className='size-6 text-[##6F767E]'/>
            </button>
          </div>
       </div>
       <RecentOrdersTable/>
      </CardContent>
     </Card>
    </div>
  )
}
