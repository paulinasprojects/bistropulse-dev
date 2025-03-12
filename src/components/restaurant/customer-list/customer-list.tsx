import { CustomerListCustomData } from "@/lib/data";
import Image from "next/image";

export const CustomerList = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        {CustomerListCustomData.map((data) => (
        <div className="flex gap-2 hover:bg-[#F4F4F4] cursor-pointer p-1.5 hover:rounded-[8px]" key={data.id}>
          <Image
            src={data.image}
            alt="customer image"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[#33383F] font-semibold text-md">{data.name}</p>
            <p className="text-textColor font-normal text-xs">{data.phone}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
