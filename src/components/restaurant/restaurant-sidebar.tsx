import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { RestaurantMainSidebar } from "./restaurant-main-sidebar";

export const RestaurantSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-2" collapsible="icon">
      <SidebarContent className="bg-background">
        <RestaurantMainSidebar/>
      </SidebarContent>
    </Sidebar>
  )
}
