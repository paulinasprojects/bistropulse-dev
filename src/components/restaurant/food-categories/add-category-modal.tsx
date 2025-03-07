import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'
import React from 'react'

interface Props {
  setOpenModal: () => void
}

export const AddCategoryModal = ({setOpenModal}: Props) => {
  return (
    <div className='test-modal'>
      <div className="flex items-center justify-between mx-5">
        <span className='text-xl font-semibold text-[#1A1D1F]'>Add Food Category</span>
        <X className='size-5 cursor-pointer' onClick={setOpenModal}/>    
      </div>
      <Separator className='mt-6'/>
      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="categoryInput" className='text-sm font-semibold text-[#1A1D1F]'>Category Name</label>
        <input id='categoryInput' type="text" placeholder='Enter Category' className='w-full border-[1px] border-[#9A9FA5] rounded-[6px] h-[48px] pl-5' />
        <button type='submit' className='mt-3 w-full bg-[#2A85FF] hover:bg-[#4291f8] text-white h-[48px] rounded-[6px] text-[15px] font-semibold' onClick={setOpenModal}>Submit</button>
      </div>
    </div>
  )
}
