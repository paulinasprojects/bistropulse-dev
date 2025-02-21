import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { RestaurantTabs } from './restaurant-tabs';

export const RestaurantCard = () => {
  return (
    <Card className='xl:max-w-[648px] lg:w-full'>
      <CardContent className='mt-[28px]'>
        <CardHeading
          title='Restaurants'
        />
        <RestaurantTabs/>
      </CardContent>
    </Card>
  )
}
