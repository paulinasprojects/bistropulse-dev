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

export const recentOrdersRequestsData = [
  {
    orderId: "B13789",
    date: "Feb 08, 2025",
    customer: "Dianne Russell",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739951681/Avatar_e86jhe.png",
    restaurant: "Big Burger",
    price: "$90.00",
    status: "Pending",
  },
  {
    orderId: "B13788",
    date: "Feb 11, 2025",
    customer: "Leslie Alexander",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739951965/Avatar_1_xmb1vf.png",
    restaurant: "Queenstown Public House",
    price: "$75.00",
    status: "Pending",
  },
  {
    orderId: "B13787",
    date: "Feb 12, 2025",
    customer: "Ralph Edwards",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739952001/Avatar_2_tvvyp2.png",
    restaurant: "Top of the Mark",
    price: "$110.00",
    status: "Pending",
  },
  {
    orderId: "B13786",
    date: "Feb 15, 2025",
    customer: "Jane Cooper",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739952031/Avatar_3_zc8dla.png",
    restaurant: "Bean Around the World Coffees",
    price: "$80.00",
    status: "Pending",
  },
  {
    orderId: "B13785",
    date: "Feb 21, 2025",
    customer: "Kathryn Murphy",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739952060/Avatar_4_xpqfuo.png",
    restaurant: "Top of the Mark",
    price: "$80.00",
    status: "Pending",
  },
  {
    orderId: "B13784",
    date: "Feb 24, 2025",
    customer: "Jenny Wilson",
    customerImage:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1739952105/Avatar_5_zdyvu5.png",
    restaurant: "Mirazur",
    price: "$30.00",
    status: "Pending",
  },
];

export const salesData = [
  {
    title: "Total Sales",
    count: "1,390",
    percent: "2.35%",
    className: "bg-[#fef0e2] text-[#F69133]",
  },
  {
    title: "Hourly Sales",
    count: "139",
    percent: "2.35%",
    className: "bg-[#e1f0f4] text-[#2796AE]",
  },
  {
    title: "Monthly Sales",
    count: "1123",
    percent: "2.35%",
    className: "bg-[#e1f4e9] text-[#27AE60]",
  },
];

export const rankedRestaurantsData = [
  {
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740128531/unsplash_oBbTc1VoT-0_iy4g5d.png",
    restaurantName: "Star Valley Restaurant",
    restaurantAdress: "G. P. O., Asafoatse Nettey Road, Accra",
    restaurantOrders: 29,
  },
  {
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740128531/unsplash_oBbTc1VoT-0_iy4g5d.png",
    restaurantName: "Queenstown Public House",
    restaurantAdress: "G. P. O., Asafoatse Nettey Road, Accra",
    restaurantOrders: 59,
  },
  {
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740128531/unsplash_oBbTc1VoT-0_iy4g5d.png",
    restaurantName: "Top of the Mark",
    restaurantAdress: "G. P. O., Asafoatse Nettey Road, Accra",
    restaurantOrders: 41,
  },
  {
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740128531/unsplash_oBbTc1VoT-0_iy4g5d.png",
    restaurantName: "Mirazur",
    restaurantAdress: "G. P. O., Asafoatse Nettey Road, Accra",
    restaurantOrders: 75,
  },
];

export const ReviewsData = [
  {
    id: uuidv4(),
    name: "Beef onion pizza",
    date: "Feb 09, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Cheese Pizza",
    date: "Feb 10, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Chicken burger",
    date: "Feb 11, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Seared Salmon Fillet",
    date: "Feb 12, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Rosemary Filet Mignon",
    date: "Feb 13, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Summer Fruit Chocolate Mousse",
    date: "Feb 14, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Chicken Wings",
    date: "Feb 15, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Classic Cheeseburger",
    date: "Feb 16, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Pasta Alfredo ",
    date: "Feb 17, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Veggie Stir-Fry",
    date: "Feb 18, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Garlic Bread",
    date: "Feb 19, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Mozzarella Sticks",
    date: "Feb 20, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Ribeye Steak",
    date: "Feb 21, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Grilled Lamb Chops",
    date: "Feb 22, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Grilled Chicken Plate",
    date: "Feb 23, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Teriyaki Chicken",
    date: "Feb 24, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Lobster Tail",
    date: "Feb 25, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Shrimp Scampi",
    date: "Feb 26, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Fish & Chips",
    date: "Feb 27, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Cajun Shrimp Boil ",
    date: "Feb 28, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Crispy Chicken Sandwich ",
    date: "March 1, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Philly Cheesesteak",
    date: "March 2, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: uuidv4(),
    name: "Spaghetti Bolognese",
    date: "March 3, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
];

export const CustomersData = [
  {
    id: uuidv4(),
    name: "Chelsea Johnson",
    phone: "880160000770",
    location: "Corner Street 5th London",
  },
  {
    id: uuidv4(),
    name: "Matthew Duke",
    phone: "880160043540",
    location: "Corner Street 5th London",
  },
  {
    id: uuidv4(),
    name: "Rod Elder",
    phone: "680161234770",
    location: "Corner Street 5th London",
  },
  {
    id: uuidv4(),
    name: "Earl Moss",
    phone: "880164568770",
    location: "Corner Street 5th London",
  },
];
