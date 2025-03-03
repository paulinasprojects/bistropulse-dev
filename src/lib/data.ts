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
  Plus,
  ListIcon,
  HistoryIcon,
  SquarePlus,
  PizzaIcon,
  CircleDollarSign,
  Wallet,
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
    title: "Rest. Management",
    href: "/restaurant-management",
    icon: StoreIcon,
    subcategories: [
      {
        title: "Add Restaurant",
        href: "/restaurant-management/add-new-restaurant",
        icon: Plus,
      },
    ],
  },
  {
    title: "Rider Management",
    href: "/rider-management",
    icon: BikeIcon,
    subcategories: [
      {
        title: "Rider List",
        href: "/rider-management/rider-list",
        icon: ListIcon,
      },
      {
        title: "Rider Attendance",
        href: "/rider-management/rider-attendace",
        icon: HistoryIcon,
      },
    ],
  },
  {
    title: "Orders Management",
    href: "/orders-management",
    icon: Book,
    subcategories: [
      {
        title: "Order List",
        href: "/orders-management/restaurant/order-list",
        icon: ListIcon,
      },
      {
        title: "Order History",
        href: "/orders-management/restaurant/order-history",
        icon: HistoryIcon,
      },
      {
        title: "Order Extras",
        href: "/orders-management/restaurant/order-extras",
        icon: SquarePlus,
      },
    ],
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

export const restaurantSidebarItems = [
  {
    title: "Overview",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/overview",
    icon: HomeIcon,
  },
  {
    title: "Customer List",
    href: "/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/customer-list",
    icon: ListIcon,
  },
  {
    title: "Food Menu",
    href: "/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/food-menu",
    icon: PizzaIcon,
    subcategories: [
      {
        title: "Food List",
        href: "/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/food-menu/food-list",
        icon: ListIcon,
      },
      {
        title: "Food Categories",
        href: "/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/food-menu/food-categories",
        icon: HistoryIcon,
      },
      {
        title: "Food Extras",
        href: "/restaurant-management/restaurant/7d8d5912-feb8-48a0-9431-b6dc3d6ba81c/food-menu/food-extras",
        icon: SquarePlus,
      },
    ],
  },
  {
    title: "Orders",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/orders",
    icon: Book,
    subcategories: [
      {
        title: "Order List",
        href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/orders/order-list",
        icon: ListIcon,
      },
      {
        title: "Order History",
        href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/orders/order-history",
        icon: HistoryIcon,
      },
      {
        title: "Order Extras",
        href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/orders/order-extras",
        icon: SquarePlus,
      },
    ],
  },
  {
    title: "Sales",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/sales",
    icon: CircleDollarSign,
  },
  {
    title: "Wallet",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/wallet",
    icon: Wallet,
  },
  {
    title: "Reviews & Ratings",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/reviews-ratings",
    icon: ListIcon,
  },
  {
    title: "Advertisement",
    href: "/restaurant-management/restaurant/a4d01916-8a6f-44c0-a75d-7cfd5fe15d19/advertisment",
    icon: Megaphone,
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

export const RestaurantsData = [
  {
    id: uuidv4(),
    name: "Sun valley restaurant",
    representative: "Darrell Steward",
    location: "Aueduase",
    phone: "(406) 555-0120",
    rating: 4.8,
    status: "Open",
  },
  {
    id: uuidv4(),
    name: "Moon valley restaurant",
    representative: "Darrell Steward",
    location: "Asafoatse Nettey Road, Accra",
    phone: "(480) 555-0103",
    rating: 5.0,
    status: "Closed",
  },
  {
    id: uuidv4(),
    name: "Queenstown Public House",
    representative: "Darrell Steward",
    location: "Aueduase",
    phone: "(603) 555-0123",
    rating: 4.5,
    status: "Open",
  },
  {
    id: uuidv4(),
    name: "Top of the Mark",
    representative: "Darrell Steward",
    location: "Nettey Road, Accra",
    phone: "(704) 555-0127",
    rating: 4.9,
    status: "Closed",
  },
  {
    id: uuidv4(),
    name: "Mirazur",
    representative: "Darrell Steward",
    location: "Asafoatse",
    phone: "(239) 555-0108",
    rating: 4.2,
    status: "Open",
  },
  {
    id: uuidv4(),
    name: "Red Canappe",
    representative: "Darrell Steward",
    location: "Nettey Road, Accra",
    phone: "(316) 555-0116",
    rating: 4.8,
    status: "Closed",
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

export const CustomersListData = [
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: uuidv4(),
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
];

export const CustomerListCustomData = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994759/Avatar_6_o5syyt.png",
    name: "Ronald Richards",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    name: "Chelsie Johnson",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994802/ab3b6024-91b0-446a-a711-84fe190bc858_spyqur.png",
    name: "Darrell Steward",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994842/1a1b7335-1424-46d7-ba93-a04f68d2cb7e_yt7giw.png",
    name: "Alberta Flores",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994860/55f239a8-4a3c-4802-bda5-2f60030acb3e_cso3zj.png",
    name: "Wade Warren",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994892/33ae9e56-2917-4aa1-96c8-64731161b6cc_fl6tog.png",
    name: "Esther Howard",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994914/52633bcb-e5c7-42eb-9485-2b809be5bf85_bp5oj4.png",
    name: "Cameron Williamson",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994964/abc86d40-c5ff-4e6b-b5f6-9601377d3bf0_n6ocdm.png",
    name: "Brooklyn Simmons",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994990/6fe669cc-7fa5-4648-aef8-6662c9b1a4a7_q54avh.png",
    name: "Jenny Wilson",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740995013/a8b3438f-f1b9-48fa-ba1d-29e4cbf32fd3_qqfrcj.png",
    name: "Dianne Russell",
    phone: "+880160000770",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740995030/ec835fbe-f852-42fe-9afe-082d249a369a_jemhpx.png",
    name: "Devon Lane",
    phone: "+880160000770",
  },
];
