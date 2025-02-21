import { CustomersData } from '@/lib/data';
import { DataTable } from './customers-table/data-table';
import { columns } from './customers-table/columns';
import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';

export const CustomersCard = () => {
  return (
    <Card className='xl:w-[647px] lg:w-full'>
    <CardContent className='mt-[28px]'>
      <div className="flex items-center justify-between">
          <CardHeading
            title='Customers'
          />
          <input type="text" placeholder='Search' className='w-[100px] h-[40px] pl-4 border-[1px] border-[#EFEFEF] rounded-[5px]' />
        </div>
        <DataTable columns={columns} data={CustomersData}/>
    </CardContent>
    </Card>
  )
}
