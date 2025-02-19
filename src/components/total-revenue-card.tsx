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

const chartData = [
  {
    month: "10:00AM",
    desktop: 11,
    mobile: 20,
  },
  {
    month: "11:00AM",
    desktop: 20,
    mobile: 25,
  },
  {
    month: "12:00AM",
    desktop: 15,
    mobile: 19,
  },
  {
    month: "1:00PM",
    desktop: 18,
    mobile: 35,
  },
  {
    month: "2:00PM",
    desktop: 35,
    mobile: 25,
  },
  {
    month: "3:00PM",
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
        <button className='text-sm'>Daily</button>
        </div>
        <ChartContainer 
          config={chartConfig} 
          className=' mt-5'>
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
              dataKey="month"
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

