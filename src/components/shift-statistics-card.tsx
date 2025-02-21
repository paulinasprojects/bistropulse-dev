"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
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
import { TotalRevenueDropdownMenu } from './total-revenue-dropdown-menu';

const chartData = [
  {
    time: "10:00 AM - 4:00PM",
    riders: 38,
  },
  {
    time: "4:00PM - 10:00PM",
    riders: 62,
  },
  {
    time: "10:00PM - 4:00AM",
    riders: 43,
  },
  {
    time: "4:00AM - 10:00AM",
    riders: 50,
  },
];

const chartConfig = {
  riders: {
    label: "Riders",
    color: "#2A85FF"
  }
} satisfies ChartConfig;

export const ShiftStatisticsCard = () => {
  return (
    <Card className='xl:max-w-[648px] lg:w-full'>
      <CardContent className='mt-[27px]'>
        <div className="flex items-center justify-between">
          <CardHeading
            title='Shift Statistics'
          />
          <TotalRevenueDropdownMenu/>
        </div>
        <ChartContainer
          config={chartConfig}
          className='mt-9'
        >
          <BarChart 
            accessibilityLayer
            data={chartData}
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel/>}
            />
            <Bar dataKey="riders" fill='var(--color-riders)' radius={4} barSize={33}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
