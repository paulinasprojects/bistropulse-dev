import { CustomerListCustomData } from "@/lib/data";
import Image from "next/image";

export const CustomerList = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        {CustomerListCustomData.map((data) => (
        <div className="flex gap-2" key={data.id}>
          <Image
            src={data.image}
            alt="customer image"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[#33383F] font-semibold text-[16px]">{data.name}</p>
            <p className="text-[#6F767E] font-normal text-[12px]">{data.phone}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
