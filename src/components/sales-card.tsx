import { CardHeading } from './card-heading';
import { SalesCardContent } from './sales-card-content';
import { TotalRevenueDropdownMenu } from './total-revenue-dropdown-menu';
import {
  Card,
  CardContent
} from '@/components/ui/card';

export const SalesCard = () => {
  return (
    <Card className='xl:max-w-[500px] lg:w-full'>
      <CardContent className='mt-[28px]'>
        <div className="flex justify-between">
          <CardHeading
            title='Sales'
          />
          <TotalRevenueDropdownMenu/>
        </div>
        <SalesCardContent/>
      </CardContent>
    </Card>
  )
}
