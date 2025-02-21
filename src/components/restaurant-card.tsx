import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { RestaurantTabs } from './restaurant-tabs';

export const RestaurantCard = () => {
  return (
    <Card className='w-full'>
      <CardContent className='mt-[28px]'>
        <CardHeading
          title='Restaurants'
        />
        <RestaurantTabs/>
      </CardContent>
    </Card>
  )
}
