import Image from 'next/image';
import { EllipsisVertical } from 'lucide-react';
import { recentOrdersRequestsData } from '@/lib/data';

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export const RecentOrdersTable = () => {
  return (
    <div className="mt-[36px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-[16px] text-[#33383F] font-medium md:hidden max-sm:hidden'>Order ID</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Date</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Customer</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Restaurant</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Price</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Status</TableHead>
            <TableHead className='text-[16px] text-[#33383F] font-medium'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrdersRequestsData.map((data) => (
          <TableRow key={data.orderId}>
            <TableCell className='text-[#6F767E] text-sm font-normal  md:hidden max-sm:hidden'>{data.orderId}</TableCell>
            <TableCell className='text-[#6F767E] text-sm font-normal'>{data.date}</TableCell>
            <TableCell className='text-[#6F767E] text-sm font-normal flex items-center gap-2'>
              <Image
                src={data.customerImage}
                alt='image'
                width={24}
                height={24}
                className='rounded-full lg:block md:hidden max-sm:hidden'
              />
             {data.customer}
            </TableCell>
            <TableCell className='text-[#6F767E] text-sm font-normal'>{data.restaurant}</TableCell>
            <TableCell className='text-[#6F767E] font-normal text-xs'>{data.price}</TableCell>
            <TableCell className='text-sm text-[#F69133] font-medium'>{data.status}</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
