"use client";

import { usePathname } from "next/navigation";
import { HomeLayout } from "@/components/layouts/home-layout";
import { RestaurantLayout } from "@/components/layouts/restaurant-layout";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()

  const isRestaurantPage = pathname.includes("/restaurant/");

  const SelectedLayout = isRestaurantPage ? RestaurantLayout : HomeLayout;


  return (
    <SelectedLayout>
      {children}
    </SelectedLayout>
  );
};

export default Layout;