import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { EllipsisVertical } from 'lucide-react';

export const RecentOrdersTable = () => {
  return (
    <div className="mt-[36px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Restaurant</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>B13789</TableCell>
            <TableCell>Feb 08, 2022</TableCell>
            <TableCell>Dianne Russell</TableCell>
            <TableCell>Big Burger</TableCell>
            <TableCell>$90.00</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <EllipsisVertical className='cursor-pointer'/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
