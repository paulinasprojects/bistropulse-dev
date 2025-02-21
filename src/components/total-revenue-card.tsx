"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { CardHeading } from './card-heading';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import Image from 'next/image';
import { TotalRevenueDropdownMenu } from './total-revenue-dropdown-menu';

const chartData = [
  {
   time: "10:00AM",
    desktop: 11,
    mobile: 20,
  },
  {
   time: "11:00AM",
    desktop: 20,
    mobile: 25,
  },
  {
   time: "12:00AM",
    desktop: 15,
    mobile: 19,
  },
  {
   time: "1:00PM",
    desktop: 18,
    mobile: 35,
  },
  {
   time: "2:00PM",
    desktop: 35,
    mobile: 25,
  },
  {
   time: "3:00PM",
    desktop: 18,
    mobile: 45,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2A85FF",
  },
  mobile: {
    label: "Mobile",
    color: "#F04D58",
  },
} satisfies ChartConfig;


export function TotalRevenueCard() {
  return (
    <Card className='xl:max-w-[648px] lg:w-full'>
      <CardContent className='mt-[27px]'>
        <div className="flex justify-between">
          <CardHeading
            title='Total Revenue'
          />
          <TotalRevenueDropdownMenu/>
        </div>
        <div className="flex items-center justify-between mt-7 mx-6">
          <div className="flex gap-4">
            <Image
              src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1739963631/Group_5691_hbxh6r.png"
              alt='income-image'
              width={45}
              height={43}
            />
            <div className="flex flex-col gap-1">
              <span className='text-[16px] font-normal text-[#6F767E] leading-[20px]'>Income</span>
              <span className='xl:text-3xl md:text-2xl font-bold leading-[38px] text-[#111315]'>$1,390,39</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1739963766/Group_5691_1_nlhqim.png"
              alt='expense-image'
              width={45}
              height={43}
            />
            <div className="flex flex-col gap-1">
              <span className='text-[16px] font-normal text-[#6F767E] leading-[20px]'>Expenses</span>
              <span className='xl:text-3xl md:text-2xl font-bold leading-[38px] text-[#111315]'>$1,390,39</span>
            </div>
          </div>
        </div>
        <ChartContainer 
          config={chartConfig} 
          className='mt-9'>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false}/>
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={5}
            />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={18}
                tickCount={5}
            />
             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={4}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={4}
                dot={false}

              />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

