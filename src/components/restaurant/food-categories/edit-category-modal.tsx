import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";


interface Props {
  setOpenModal: () => void;
  name: string;
}

export const EditCategoryModal = ({ setOpenModal, name }: Props) => {
  return (
    <div className="test-modal">
      <div className="flex items-center justify-between mx-5">
        <span className="text-xl font-semibold text-textBlackColor">Edit Food Category Name</span>
        <X className="size-5 cursor-pointer" onClick={setOpenModal}/>
      </div>
      <Separator className="mt-6"/>
      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="categoryEditInput" className="text-sm font-semibold text-[#1A1D1F">Category Name</label>
        <input id="categoryEditInput" type="text" defaultValue={name} placeholder="Enter a new name" className="w-full border-[1px] border-[#9A9FA5] rounded-[6px] h-[48px] pl-5" />
        <button type='submit' className='mt-3 w-full bg-buttonColor hover:bg-buttonHover text-white h-[48px] rounded-[6px] text-ms font-semibold' onClick={setOpenModal}>Submit</button>
      </div>
    </div>
  )
}
