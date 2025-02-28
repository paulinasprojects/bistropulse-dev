"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { restaurantSidebarItems } from "@/lib/data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";


export const RestaurantMainSidebar = () => {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>();

  //Toggle menu

  const handleToggle  = (title: string) => {
    setOpenMenu(openMenu === title ? null : title)
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-[12px] mt-5">
          {restaurantSidebarItems.map((item) => (
            <div key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  isActive={pathname === item.href}
                  onClick={() => item.subcategories && handleToggle(item.title)}
                >
                  <div className="flex items-center justify-between whitespace-nowrap w-full">
                    <Link href={item.href} className={cn("flex items-center gap-4", pathname === item.href && "!text-blue-500")}>
                      <item.icon className="size-5"/>
                      <span className="text-sm">{item.title}</span>
                    </Link>
                    {item.subcategories && (
                      <span className="text-sm">{openMenu === item.title ? <MdKeyboardArrowUp className="size-6"/> : <MdKeyboardArrowDown className="size-6"/>}</span>
                    )}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {item.subcategories && openMenu === item.title && (
                <div className="ml-4 flex flex-col gap-6 mt-5">
                  {item.subcategories.map((category) => (
                    <SidebarMenuItem key={category.title}>
                      <Link href={category.href} className={cn("flex items-center gap-4", pathname === category.href && "!text-blue-500")}>
                        <category.icon className="size-4"/>
                        {category.title}
                      </Link>
                    </SidebarMenuItem>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
