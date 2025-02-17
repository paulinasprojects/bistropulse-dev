import { v4 as uuidv4 } from "uuid";

import {
  BikeIcon,
  HomeIcon,
  StoreIcon,
  UsersIcon,
  Book,
  Megaphone,
  Package,
  PackageX,
  PackageCheck,
  PackagePlus,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Customer Management",
    href: "/customer-management",
    icon: UsersIcon,
  },
  {
    title: "Restaurant Management",
    href: "/restaurant-management",
    icon: StoreIcon,
  },
  {
    title: "Rider Management",
    href: "/rider-management",
    icon: BikeIcon,
  },
  {
    title: "Orders Management",
    href: "/orders-management",
    icon: Book,
  },
  {
    title: "Advertisement",
    href: "/advertisement",
    icon: Megaphone,
  },
  {
    title: "Employees Management",
    href: "/employees-management",
    icon: UsersIcon,
  },
];

export const homepageOrders = [
  {
    id: uuidv4(),
    title: "Active Orders",
    count: 2390,
    icon: Package,
    className: "bg-[#e1f6eb] text-[#39c272]",
  },
  {
    id: uuidv4(),
    title: "Pending Orders",
    count: 2770,
    icon: PackagePlus,
    className: "bg-[#dfeff3] text-[#2796ae]",
  },
  {
    id: uuidv4(),
    title: "Delivered Orders",
    count: 3870,
    icon: PackageCheck,
    className: "bg-[#feefe0] text-[#f69133]",
  },
  {
    id: uuidv4(),
    title: "Returned Orders",
    count: 550,
    icon: PackageX,
    className: "bg-[#fde4e6] text-[#f04d58]",
  },
];
