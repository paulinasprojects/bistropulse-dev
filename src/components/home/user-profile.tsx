import { Bell,MessageSquareText } from "lucide-react";
import Image from "next/image";

export const UserProfile = () => {
  return (
    <div className="flex items-center gap-[30px]">
      <div className="relative">
      <MessageSquareText className="cursor-pointer"/>
      <span className="absolute w-[8px] h-[8px] rounded-full bg-[#FF6A55] top-0 right-0"/>
      </div>
      <div className="relative">
        <Bell className="cursor-pointer"/>
        <span className="absolute w-[8px] h-[8px] rounded-full bg-[#FF6A55] top-0 right-0.5"/>
      </div>
      <Image
        src="/user-image.png"
        alt="image"
        width={40}
        height={40}
      />
    </div>
  )
}
