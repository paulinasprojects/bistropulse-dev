import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar'
import { RestaurantNavbar } from '../restaurant/restaurant-navbar';
import { RestaurantSidebar } from '../restaurant/restaurant-sidebar';

interface Props {
  children: React.ReactNode;
};

export const RestaurantLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <RestaurantNavbar/>
        <div className="flex min-h-screen pt-[4rem]">
          <RestaurantSidebar/>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
