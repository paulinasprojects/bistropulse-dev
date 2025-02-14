import { Sidebar, SidebarContent } from "../ui/sidebar"
import { MainSidebar } from "./main-sidebar"


export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-2" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSidebar/>
      </SidebarContent>
    </Sidebar>
  )
}
