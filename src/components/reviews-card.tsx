
import { DataTable } from "./reviews-table/data-table";
import {columns} from './reviews-table/columns';
import { ReviewsData } from "@/lib/data";

import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';

export const ReviewCard = () => {
  return (
    <Card className="w-full">
     <CardContent className="mt-[28px]">
      <CardHeading
        title="Reviews"
      />
       <DataTable columns={columns} data={ReviewsData}/>
     </CardContent>
    </Card>
  )
}
