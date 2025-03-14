import { X } from "lucide-react";
import { CardHeading } from "../card-heading";
import { NotificationTabs } from "./notification-tabs";

interface Props {
  setOpenModal: () => void;
}

export const UserProfileNotificationsModal = ({ setOpenModal }: Props) => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-6 py-6">
        <CardHeading
          title="Notifications"
        />
        <X className="cursor-pointer size-5 hover:text-textColor" onClick={setOpenModal}/>
      </div>
      <NotificationTabs/>
    </div>
  )
}
