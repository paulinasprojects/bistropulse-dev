import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "../home/user-profile";

export const RestaurantNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center pl-2 pr-10 z-50">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hidden max-sm:block"/>
          <Link href="/restaurant-management" className="flex items-center text-[#2A85FF] text-sm font-medium gap-2 hover:text-[#1A1D1F]">
            <MdKeyboardArrowLeft className="size-5"/>
            Kalavuna Restaurant
          </Link>
          <div className="hidden lg:flex items-center gap-[7px]">
            <Link href="/restaurant-management" className="text-sm font-medium hover:text-[#2A85FF]">Restaurant Management</Link>
            <MdKeyboardArrowRight />
            <Link href="/restaurant-management/restaurant/1" className="text-[12px] font-normal text-[#6F767E] hover:text-[#2A85FF]">
              Restaurant
            </Link>
          </div>
        </div>
        <UserProfile/>
      </div>
    </nav>
  )
}
