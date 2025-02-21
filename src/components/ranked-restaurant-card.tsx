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
    </CardContent>
  </Card>
  )
}
