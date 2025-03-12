/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { CardHeading } from './card-heading';

export const RewardsPointsCard = () => {
  return (
    <Card className='xl:max-w-[500px] lg:w-full'>
      <CardContent className='mt-[28px]'>
        <CardHeading
          title='Reward Points'
        />
        <div className="xl:mt-[87px] lg:mt-10 md:mt-10 max-sm:mt-10 flex flex-col gap-5">
          <div className="border-[1px] border-[#EFEFEF] rounded-[14px] p-4">
            <div className="flex items-center gap-8">
              <div className='bg-blue-100 w-[96px] h-[96px] rounded-[11px] flex items-center justify-center'>
                <img src="/shield.png" alt="shield" className='object-cover' />
              </div>
              <div className="">
                <p className='text-md font-normal text-[#818C99]'>Total Points</p>
                <p className='text-2xl font-bold text-[#131313]'>2770</p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#EFEFEF] rounded-[14px] p-4">
          <div className="flex items-center gap-8">
              <div className='bg-blue-100 w-[96px] h-[96px] rounded-[11px] flex items-center justify-center'>
                <img src="/shield.png" alt="shield" className='object-cover' />
              </div>
              <div>
                <p className='text-md font-normal text-[#818C99]'>Total Points</p>
                <p className='text-2xl font-bold text-[#131313]'>770</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
