import { Card, CardContent } from "@/components/ui/card"
import { DownloadIcon} from "lucide-react"
import Image from "next/image"

export const DocumentsCard = () => {
  return (
    <Card className="xl:max-w-[395px] lg:w-full">
      <CardContent className="mt-4">
        <h3 className="text-md font-bold text-textBlackColor">Documents</h3>
        <div className="flex flex-col gap-3">
        <div className="mt-5 flex items-center gap-3 border-[1px] border-[#e0ecfe] p-4 rounded-[8px]">
          <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#e0ecfe] rounded-[11px]">
            <Image
              src="/shield.png"
              alt="shieild"
              width={30}
              height={30}
            />
          </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold text-[#131313]">License</p>
              <p className="text-md font-normal text-[#818C99]">Businesslicense.pdf</p>
            </div>
            <DownloadIcon className="ml-auto cursor-pointer"/>
        </div>
        {/*  */}
        <div className="flex items-center gap-3 border-[1px] border-[#e0ecfe] p-4 rounded-[8px]">
          <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#e0ecfe] rounded-[11px]">
            <Image
              src="/shield.png"
              alt="shieild"
              width={30}
              height={30}
            />
          </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold text-[#131313]">NID Card</p>
              <p className="text-md font-normal text-[#818C99]">Nidcard.pdf</p>
            </div>
            <DownloadIcon className="ml-auto cursor-pointer"/>
        </div>     
          </div>
      </CardContent>
    </Card>
  )
}
