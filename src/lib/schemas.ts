import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long." }),
});

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long." }),
});

export enum PaymentTypes {
  CashInHand = "Cash in hand",
  DebitCard = "Debit Card",
  CreditCard = "Credit Card",
}

export const WorkingPeriods = [
  {
    id: uuidv4(),
    time: "9:00 AM - 20:00 PM",
  },
  {
    id: uuidv4(),
    time: "12:00 AM - 19:00 PM",
  },
  {
    id: uuidv4(),
    time: "16:00 PM - 22:00 PM",
  },
];

export const addRestaurantSchema = z.object({
  restaurantName: z.string().min(1, { message: "Restaurant Name is required" }),
  representitiveName: z
    .string()
    .min(1, { message: "Representitive Name is required" }),
  phone: z.coerce.number().min(1, { message: "Phone number is requred" }),
  businessLicense: z.instanceof(File, {
    message: "Business license file is required",
  }),
  established: z.string().date(),
  paymentMethods: z.nativeEnum(PaymentTypes),
  workingHours: z
    .string()
    .refine((val) => WorkingPeriods.map((field) => field.id).includes(val), {
      message: "Invalid working hour selection",
    }),
  location: z.string().min(1, { message: "Location is required" }),
});

export enum CustomerGender {
  Male = "Male",
  Female = "Female",
}

export const addCustomerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  phone: z.coerce.number().min(1, { message: "Phone number is requred" }),
  gender: z.nativeEnum(CustomerGender, {
    message: "Gender is required",
  }),
  location: z.string().min(1, { message: "Location is required" }),
  student: z.boolean().default(false).optional(),
});

export enum FoodCategory {
  Pizza = "Pizza",
  Burger = "Burger",
}

export enum Sizes {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export const addFoodSchema = z.object({
  category: z.nativeEnum(FoodCategory, {
    message: "Food category is required",
  }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is requried" }),
  sizes: z.nativeEnum(Sizes, { message: "Size is required" }),
  price: z.coerce.number().min(1, { message: "Prize is requred" }),
});

export const addExtrasSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  price: z.coerce.number().min(1, { message: "Price is required" }),
});
