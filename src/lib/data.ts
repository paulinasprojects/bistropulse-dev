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
    href: "/restaurant-management/restaurant/1/overview",
    icon: HomeIcon,
  },
  {
    title: "Customer List",
    href: "/restaurant-management/restaurant/1/customer-list",
    icon: ListIcon,
  },
  {
    title: "Food Menu",
    href: "/restaurant-management/restaurant/1/food-menu",
    icon: PizzaIcon,
    subcategories: [
      {
        title: "Food Categories",
        href: "/restaurant-management/restaurant/1/food-menu/food-categories",
        icon: ListIcon,
      },
      {
        title: "Food Extras",
        href: "/restaurant-management/restaurant/1/food-menu/food-extras",
        icon: SquarePlus,
      },
    ],
  },
  {
    title: "Orders",
    href: "/restaurant-management/restaurant/1/orders",
    icon: Book,
    subcategories: [
      {
        title: "Order List",
        href: "/restaurant-management/restaurant/1/orders/order-list",
        icon: ListIcon,
      },
      {
        title: "Order History",
        href: "/restaurant-management/restaurant/1/orders/order-history",
        icon: HistoryIcon,
      },
      {
        title: "Order Extras",
        href: "/restaurant-management/restaurant/1/orders/order-extras",
        icon: SquarePlus,
      },
    ],
  },
  {
    title: "Sales",
    href: "/restaurant-management/restaurant/1/sales",
    icon: CircleDollarSign,
  },
  {
    title: "Wallet",
    href: "/restaurant-management/restaurant/1/wallet",
    icon: Wallet,
  },
  {
    title: "Reviews & Ratings",
    href: "/restaurant-management/restaurant/1/reviews-ratings",
    icon: ListIcon,
  },
  {
    title: "Advertisement",
    href: "/restaurant-management/restaurant/1/advertisment",
    icon: Megaphone,
  },
];

export const homepageOrders = [
  {
    id: 4,
    title: "Active Orders",
    count: 2390,
    icon: Package,
    className: "bg-[#e1f6eb] text-[#39c272]",
  },
  {
    id: 99,
    title: "Pending Orders",
    count: 2770,
    icon: PackagePlus,
    className: "bg-[#dfeff3] text-[#2796ae]",
  },
  {
    id: 185,
    title: "Delivered Orders",
    count: 3870,
    icon: PackageCheck,
    className: "bg-[#feefe0] text-[#f69133]",
  },
  {
    id: 165,
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
    id: 56,
    name: "Beef onion pizza",
    date: "Feb 09, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 50,
    name: "Cheese Pizza",
    date: "Feb 10, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 45,
    name: "Chicken burger",
    date: "Feb 11, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 41,
    name: "Seared Salmon Fillet",
    date: "Feb 12, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 38,
    name: "Rosemary Filet Mignon",
    date: "Feb 13, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 91,
    name: "Summer Fruit Chocolate Mousse",
    date: "Feb 14, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 13,
    name: "Chicken Wings",
    date: "Feb 15, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 14,
    name: "Classic Cheeseburger",
    date: "Feb 16, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 20,
    name: "Pasta Alfredo ",
    date: "Feb 17, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 24,
    name: "Veggie Stir-Fry",
    date: "Feb 18, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 156,
    name: "Garlic Bread",
    date: "Feb 19, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 187,
    name: "Mozzarella Sticks",
    date: "Feb 20, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 174,
    name: "Ribeye Steak",
    date: "Feb 21, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 131,
    name: "Grilled Lamb Chops",
    date: "Feb 22, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 111,
    name: "Grilled Chicken Plate",
    date: "Feb 23, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 123,
    name: "Teriyaki Chicken",
    date: "Feb 24, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 145,
    name: "Lobster Tail",
    date: "Feb 25, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 167,
    name: "Shrimp Scampi",
    date: "Feb 26, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 189,
    name: "Fish & Chips",
    date: "Feb 27, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 191,
    name: "Cajun Shrimp Boil ",
    date: "Feb 28, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 201,
    name: "Crispy Chicken Sandwich ",
    date: "March 1, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 222,
    name: "Philly Cheesesteak",
    date: "March 2, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
  {
    id: 211,
    name: "Spaghetti Bolognese",
    date: "March 3, 2024",
    review: "I'm very much happy. Food is good.",
    rating: 4.8,
  },
];

export const RestaurantsData = [
  {
    id: 1,
    name: "Sun valley restaurant",
    representative: "Darrell Steward",
    location: "Aueduase",
    phone: "(406) 555-0120",
    rating: 4.8,
    status: "Open",
  },
  {
    id: 2,
    name: "Moon valley restaurant",
    representative: "Darrell Steward",
    location: "Asafoatse Nettey Road, Accra",
    phone: "(480) 555-0103",
    rating: 5.0,
    status: "Closed",
  },
  {
    id: 3,
    name: "Queenstown Public House",
    representative: "Darrell Steward",
    location: "Aueduase",
    phone: "(603) 555-0123",
    rating: 4.5,
    status: "Open",
  },
  {
    id: 4,
    name: "Top of the Mark",
    representative: "Darrell Steward",
    location: "Nettey Road, Accra",
    phone: "(704) 555-0127",
    rating: 4.9,
    status: "Closed",
  },
  {
    id: 5,
    name: "Mirazur",
    representative: "Darrell Steward",
    location: "Asafoatse",
    phone: "(239) 555-0108",
    rating: 4.2,
    status: "Open",
  },
  {
    id: 6,
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
    id: 25,
    name: "Chelsea Johnson",
    phone: "880160000770",
    location: "Corner Street 5th London",
  },
  {
    id: 26,
    name: "Matthew Duke",
    phone: "880160043540",
    location: "Corner Street 5th London",
  },
  {
    id: 27,
    name: "Rod Elder",
    phone: "680161234770",
    location: "Corner Street 5th London",
  },
  {
    id: 28,
    name: "Earl Moss",
    phone: "880164568770",
    location: "Corner Street 5th London",
  },
];

export const CustomersListData = [
  {
    id: 12,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 13,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 14,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 15,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 16,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 17,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 18,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 19,
    name: "Chelsie Jhonson",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    phone: "880160000770",
    email: "chelsie@ui8.net",
    location: "Corner Street 5th London..",
    created: "2 Feb 2022",
  },
  {
    id: 20,
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
    id: 15,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994759/Avatar_6_o5syyt.png",
    name: "Ronald Richards",
    phone: "+880160000770",
  },
  {
    id: 101,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740573382/c08cf661-a119-4c04-a0ae-798917e9f7f1_akrliv.png",
    name: "Chelsie Johnson",
    phone: "+880160000770",
  },
  {
    id: 981,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994802/ab3b6024-91b0-446a-a711-84fe190bc858_spyqur.png",
    name: "Darrell Steward",
    phone: "+880160000770",
  },
  {
    id: 761,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994842/1a1b7335-1424-46d7-ba93-a04f68d2cb7e_yt7giw.png",
    name: "Alberta Flores",
    phone: "+880160000770",
  },
  {
    id: 651,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994860/55f239a8-4a3c-4802-bda5-2f60030acb3e_cso3zj.png",
    name: "Wade Warren",
    phone: "+880160000770",
  },
  {
    id: 145,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994892/33ae9e56-2917-4aa1-96c8-64731161b6cc_fl6tog.png",
    name: "Esther Howard",
    phone: "+880160000770",
  },
  {
    id: 109,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994914/52633bcb-e5c7-42eb-9485-2b809be5bf85_bp5oj4.png",
    name: "Cameron Williamson",
    phone: "+880160000770",
  },
  {
    id: 135,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994964/abc86d40-c5ff-4e6b-b5f6-9601377d3bf0_n6ocdm.png",
    name: "Brooklyn Simmons",
    phone: "+880160000770",
  },
  {
    id: 125,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740994990/6fe669cc-7fa5-4648-aef8-6662c9b1a4a7_q54avh.png",
    name: "Jenny Wilson",
    phone: "+880160000770",
  },
  {
    id: 110,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740995013/a8b3438f-f1b9-48fa-ba1d-29e4cbf32fd3_qqfrcj.png",
    name: "Dianne Russell",
    phone: "+880160000770",
  },
  {
    id: 76,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1740995030/ec835fbe-f852-42fe-9afe-082d249a369a_jemhpx.png",
    name: "Devon Lane",
    phone: "+880160000770",
  },
];

export const CustomerOrdersData = [
  {
    orderId: "B0013789",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 01, 2024",
    status: "Pending",
  },
  {
    orderId: "B0013799",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 02, 2024",
    status: "Cancelled",
  },
  {
    orderId: "B0013800",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 03, 2024",
    status: "Preparing",
  },
  {
    orderId: "B0013801",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 04, 2024",
    status: "Delivered",
  },
  {
    orderId: "B0013802",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 05, 2024",
    status: "On the way",
  },
  {
    orderId: "B0013803",
    details: "Fufu (1), Banku(2), Bel-Aqua(1)...",
    date: "Nov 06, 2024",
    status: "Cancelled",
  },
];

export const FoodMenuListData = [
  {
    id: 1,
    name: "Beef onion pizza",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171757/044e3eec-60f8-49bc-9037-5a7efd26547b_cipyko.png",
    category: "Pizza",
    price: "$24.00",
    status: "Active",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171789/b54bf726-6526-47ca-8549-e22b1c4b666a_xniu5m.png",
    category: "Pizza",
    price: "$14.00",
    status: "Disabled",
  },
  {
    id: 3,
    name: "Chicken burger",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171818/dfb01624-c24f-4bb7-a5fe-dc7a40b06d3c_uyuu2a.png",
    category: "Burger",
    price: "$9.00",
    status: "Active",
  },
  {
    id: 4,
    name: "Beef burger",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171839/095a50b9-6f94-4c87-873e-a79c9a263810_vjylr3.png",
    category: "Burger",
    price: "$11.00",
    status: "Disabled",
  },
  {
    id: 5,
    name: "Beef special pizza",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171860/22906323-2e80-4892-87e7-feb9e10c18a6_klq4pu.png",
    category: "Pizza",
    price: "$6.00",
    status: "Active",
  },
  {
    id: 6,
    name: "Cheese Pizza",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741171789/b54bf726-6526-47ca-8549-e22b1c4b666a_xniu5m.png",
    category: "Pizza",
    price: "$28.00",
    status: "Disabled",
  },
];

export const FoodCategoriesListData = [
  {
    id: 1,
    name: "Burger",
    items: 3,
  },
  {
    id: 2,
    name: "Pizza",
    items: 2,
  },
  {
    id: 3,
    name: "Steak",
    items: 2,
  },
  {
    id: 4,
    name: "Drinks",
    items: 2,
  },
  {
    id: 5,
    name: "Alcohol",
    items: 2,
  },
  {
    id: 6,
    name: "Water",
    items: 2,
  },
];

export const FoodExtrasListData = [
  {
    id: 1,
    name: "Pepsi, 0.5 L",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353358/1117cb6f-ff0e-423c-91ce-033b35438ab1_bkuc2p.png",
    price: "$24.00",
    status: "Active",
  },
  {
    id: 2,
    name: "Bottle of water",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353400/601d51f5-4aff-47c9-a963-aaa2e3376291_jaz9lp.png",
    price: "$14.00",
    status: "Disabled",
  },
  {
    id: 3,
    name: "Fries",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353430/6f5acb31-5fe6-4a9a-aa2c-0fedd1738b14_dr4wkn.png",
    price: "$9.00",
    status: "Active",
  },
  {
    id: 4,
    name: "Cheddar Cheese",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353358/1117cb6f-ff0e-423c-91ce-033b35438ab1_bkuc2p.png",
    price: "$11.00",
    status: "Disabled",
  },
  {
    id: 5,
    name: "Mozzarella Cheese",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353400/601d51f5-4aff-47c9-a963-aaa2e3376291_jaz9lp.png",
    price: "$6.00",
    status: "Active",
  },
  {
    id: 6,
    name: "Sprite",
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741353430/6f5acb31-5fe6-4a9a-aa2c-0fedd1738b14_dr4wkn.png",
    price: "$28.00",
    status: "Disabled",
  },
];

export const CustomersFavoriteRestaurantsData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741595996/mathew-schwartz-GjzJFMnJZYg-unsplash_ytqjjw.jpg",
    name: "Sun valley restaurant",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 10,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741596093/maria-orlova-oMTlhdFUhdI-unsplash_vzjwc5.jpg",
    name: "Moon valley restaurant",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 15,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741596209/nick-karvounis-Ciqxn7FE4vE-unsplash_btrekg.jpg",
    name: "Queenstown Public House",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 10,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741596302/jason-leung-poI7DelFiVA-unsplash_mplsvt.jpg",
    name: "Top of the Mark",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 10,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741599160/andrew-seaman-sQopSb2K0CU-unsplash_we2eos.jpg",
    name: "Mirazur",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 15,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dymlzmyuo/image/upload/v1741596403/louis-hansel-wVoP_Q2Bg_A-unsplash_lgazwa.jpg",
    name: "Red Canappe",
    rating: 4.8,
    deliveryTime: "15-20 min",
    location: "Aueduase",
    discount: 10,
  },
];
