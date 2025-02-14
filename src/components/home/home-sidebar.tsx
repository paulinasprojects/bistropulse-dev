import { Sidebar, SidebarContent } from "../ui/sidebar"


export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-2" collapsible="icon">
      <SidebarContent className="bg-background">
        <div className="">test</div>
        <div className="">test</div>
      </SidebarContent>
    </Sidebar>
  )
}
