"use client";

import { Label, Pie, PieChart } from 'recharts';
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
import { RidersDropdownMenu } from './riders-dropdown-menu';
import { useMemo } from 'react';

const chartData = [
  {
    label: "Roaming",
    riders: 520,
    fill: "var(--color-roaming)",
  },
  {
    label: "Inactive",
    riders: 420,
    fill: "var(--color-inactive)",
  },
  {
    label: "Traveling",
    riders: 839,
    fill: "var(--color-traveling)",
  },
]

const chartConfig = {
  riders: {
    label: "Riders",
  },
  inactive: {
    label: "Inactive",
    color: "#F04D58",
  },
  roaming: {
    label: "Roaming",
    color: "#2796AE",
  },
  traveling: {
    label: "Traveling",
    color: "#39C272",
  },
} satisfies ChartConfig;

export const RidersCard = () => {
  const totalRiders = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.riders, 0)
  },[]);

  return (
    <Card className='xl:max-w-[500px] lg:w-full'>
      <CardContent className='mt-[27px]'>
        <div className="flex items-center justify-between">
          <CardHeading
            title='Riders'
          />
          <RidersDropdownMenu/>
        </div>
        <ChartContainer
          config={chartConfig}
          className='max-h-[380px] mx-auto mt-[40px]'
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
            <Pie
              data={chartData}
              dataKey="riders"
              nameKey="label"
              innerRadius={70}
              strokeWidth={5}
              paddingAngle={7}
              cornerRadius={50}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className='text-xl font-bold'
                        >
                          {totalRiders.toLocaleString()}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + -10}
                          className='text-xl font-bold'
                        >
                          Riders
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-[30px] grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-4">
          <div className='flex gap-3'>
            <span className='w-[30px] h-[4px] bg-[#F04D58] rounded-full mt-2'/>
            <div className="flex flex-col">
            <span className='text-[12px] font-normal text-[#6F767E]'>Inactive</span>
            <span className='text-[16px] font-semibold text-[#111315]'>420 Riders</span>
            </div>
          </div>
          <div className='flex gap-3'>
          <span className='w-[30px] h-[4px] bg-[#2796AE] rounded-full mt-2'/>
            <div className="flex flex-col">
              <span className='text-[12px] font-normal text-[#6F767E]'>Roaming</span>
              <span className='text-[16px] font-semibold text-[#111315]'>520 Riders</span>
            </div>
          </div>
          <div className='flex gap-3'>
          <span className='w-[30px] h-[4px] bg-[#39C272] rounded-full mt-2'/>
          <div className="flex flex-col">
            <span className='text-[12px] font-normal text-[#6F767E]'>Traveling</span>
            <span className='text-[16px] font-semibold text-[#111315]'>839 Riders</span>
          </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
