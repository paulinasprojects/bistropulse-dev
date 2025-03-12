import Image from "next/image"
import { CardHeading } from "../card-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const RepresentitiveCard = () => {
  return (
    <Card className="xl:max-w-[395px] lg:w-full">
      <CardContent className="mt-[34px]">
        <CardHeading
          title="Representitive Info"
        />
        <div className="flex flex-col items-center gap-3 mt-[32px]">
          <Image
            src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png"
            alt="representitive image"
            width={100}
            height={100}
          />
          <p className="text-xl font-bold text-textBlackColor">John Doe</p>
        </div>
        <div className="flex flex-col gap-2 mt-[30px]">
          <p className="text-textColor font-normal text-sm">Phone Number</p>
          <p className="text-md font-semibold text-[#33383F]">(480) 555-0103</p>
        </div>
        <Separator className="my-[14px]"/>
        <div className="flex flex-col gap-2">
          <p className="text-textColor font-normal text-sm">Location</p>
          <p className="text-md font-semibold text-[#33383F]">Asafoatse Nettey Road, Accra...</p>
        </div>
      </CardContent>
    </Card>
  )
}
