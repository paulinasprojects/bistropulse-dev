import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'

interface Props {
  setOpenModal: () => void;
};

export const DeleteCategoryModal = ({ setOpenModal }: Props) => {
  return (
    <div className="delete-category-modal">
      <div className="flex items-center justify-between mx-5">
        <span className='text-xl font-semibold text-[#1A1D1F]'>Delete Category</span>
        <X className='size-5 cursor-pointer' onClick={setOpenModal}/>
      </div>
      <Separator className='mt-6'/>
      <div className="mt-6 flex flex-col items-center gap-8">
        <p>Do you really want to delete this category?</p>
        <div className="flex items-center gap-3">
          <button className='w-[160px] h-[48px] border-[1px] border-[#EFEFEF] rounded-[6px] hover:bg-[#f9f9f9] font-semibold text-[#33383F]' onClick={setOpenModal}>Decline</button>
          <button className='w-[160px] h-[48px] bg-[#2A85FF] hover:bg-[#4291f8] text-white rounded-[6px] font-semibold' onClick={setOpenModal}>Yes, Delete</button>
        </div>
      </div>
    </div>
  )
}