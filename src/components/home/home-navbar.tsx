import Link from "next/link";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "./user-profile";
export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center pl-5 pr-10 z-50 border-b shadow-sm">
        {/* Menu and logo */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger/>
            <Link href="/">
              <Image
                src="/bistro-logo.svg"
                alt="logo"
                width={222}
                height={40}
              />
            </Link>
          </div>
          <div className="">
            <UserProfile/>
          </div>
        </div>
    </nav>
  )
}
