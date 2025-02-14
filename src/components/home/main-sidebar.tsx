"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { sidebarItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export const MainSidebar = () => {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-[12px] mt-5">
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={pathname === item.href}
              >
                <Link href={item.href} className={cn("flex items-center gap-4" , pathname === item.href && "!text-blue-500")}>
                  <item.icon/>
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
