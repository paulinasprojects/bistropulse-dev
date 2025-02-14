import { BellDot, MessageSquareText } from "lucide-react";
import Image from "next/image";

export const UserProfile = () => {
  return (
    <div className="flex items-center gap-[30px]">
      <MessageSquareText/>
      <BellDot/>
      <Image
        src="/user-image.png"
        alt="image"
        width={40}
        height={40}
      />
    </div>
  )
}
