import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { NotificationContent } from "./notification-content";

const TabsData = [
  {
    value: "all",
    title: "All",
  },
  {
    value: "customer",
    title: "Customer",
  },
  {
    value: "rider",
    title: "Rider"
  },
  {
    value: "help-and-support",
    title: "Help & Support"
  },
]


export const NotificationTabs = () => {
  return (
    <Tabs className="mt-10" defaultValue="all">
      <TabsList className="bg-transparent flex gap-2 justify-normal px-4">
        {TabsData.map((data) => (
          <TabsTrigger key={data.value} value={data.value} className="data-[state=active]:bg-buttonColor data-[state=active]:text-white  border-[1px] border-[#EFEFEF] text-sm text-[#33383F]">
            {data.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all" className="mt-6 pl-2">
        <NotificationContent
          image="/notification-avatar.png"
          time="1 hour ago"
          title="Orion created an account"
          className="bg-[#B5E4CA] rounded-full w-[35px] h-[35px] flex items-center justify-center"
          width={28}
          height={30}
        />
        <NotificationContent
          image="/paper-uploading.svg"
          time="1 hour ago"
          title="Orion created an account"
          className="bg-buttonColor rounded-full w-[32px] h-[32px] flex items-center justify-center"
          height={16}
          width={16}
        />
        <NotificationContent
          image="/danger-triangle.svg"
          time="1 day ago"
          title="Order has been canceled"
          className="bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center"
          height={16}
          width={16}
        />
        <NotificationContent
          image="/arrow-down-square.svg"
          time="20th July 2024"
          title="Invoice has been Downloaded"
          className="bg-[#D355FF] rounded-full w-[32px] h-[32px] flex items-center justify-center"
          height={16}
          width={16}
        />
        <NotificationContent
          image="/help.svg"
          time="20th May 2024"
          title="Jamison asked a question"
          className="bg-[#FF6A55] rounded-full w-[32px] h-[32px] flex items-center justify-center"
          height={16}
          width={16}
        />
      </TabsContent>
    </Tabs>
  )
}
