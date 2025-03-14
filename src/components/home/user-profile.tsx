"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bell,MessageSquareText } from "lucide-react";
import Image from "next/image";
import { UserProfileNotificationsModal } from "./user-profile-notifications-modal";

export const UserProfile = () => {
  const [openNotificationsModal, setOpenNotificationsModal] = useState<boolean>(false);

  const openModal = () => {
    setOpenNotificationsModal(!openNotificationsModal)
  };


  return (
    <>
    <div className="flex items-center gap-[30px]">
      <div className="relative">
      <MessageSquareText className="cursor-pointer"/>
      <span className="absolute w-[8px] h-[8px] rounded-full bg-[#FF6A55] top-0 right-0"/>
      </div>
      <div className="relative">
        <Bell className="cursor-pointer" onClick={() => openModal()}/>
          {openNotificationsModal ? "" : (
            <span className="absolute w-[8px] h-[8px] rounded-full bg-[#FF6A55] top-0 right-0.5 transition-colors duration-75"/>
          )}
      </div>
      <Image
        src="/user-image.png"
        alt="image"
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </div>
    {openNotificationsModal && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y:0 }} 
        className="user-profile-modal"
      >
        <UserProfileNotificationsModal setOpenModal={openModal}/>
      </motion.div>
    )}
    </>
  )
}
