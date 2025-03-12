"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WorkingPeriods, addRestaurantSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
 } from "@/components/ui/form";
 import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 import { Button } from "@/components/ui/button";
 import { Textarea } from "@/components/ui/textarea";

export const AddRestaurantForm = () => {

  const form = useForm<z.infer<typeof addRestaurantSchema>>({
    resolver: zodResolver(addRestaurantSchema),
    defaultValues: {
      restaurantName: "",
      representitiveName: "",
      phone: undefined,
      businessLicense: undefined,
      established: undefined,
      paymentMethods: undefined,
      workingHours: undefined,
      location: "",
    }
  });

  const fileRef = form.register("businessLicense");

  const onSubmit = async (values: z.infer<typeof addRestaurantSchema>) => {
    console.log(values);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 xl:px-[227px]">
            <FormField
              control={form.control}
              name="restaurantName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Restaurant Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Sun Valley Restaurant"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="representitiveName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Representitive Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="(+233) 01532548623" type="number"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessLicense"
              render={({}) => (
                <FormItem>
                  <FormLabel>Business License</FormLabel>
                  <FormControl>
                    <Input {...fileRef} type="file" className="h-[48px]"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex gap-[9px] mt-[16px] max-sm:flex-col md:flex-col lg:flex-row">
              <FormField
                control={form.control}
                name="established"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Established</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" placeholder="12/05/2025" className="lg:w-[220px] md:w-full max-sm:w-full"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="workingHours"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Working Hours</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="lg:w-[220px] md:w-full max-sm:w-full">
                        <SelectValue defaultValue={field.value} placeholder="Select working hours"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {WorkingPeriods.map((period) => (
                        <SelectItem key={period.id} value={period.id}>
                            {period.time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentMethods"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Payment Methods</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="lg:w-[190px] md:w-full max-sm:w-full w-[190px]">
                        <SelectValue defaultValue={field.value} placeholder="Select option"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="Cash in hand">Cash in hand</SelectItem>
                    <SelectItem value="Debit Card">Debit Card</SelectItem>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>    
            <FormField
              control={form.control}
              name="location"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="resize-none w-full"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          <Button type="submit" className="w-[138px] h-[44px] bg-buttonColor hover:bg-buttonHover">Add Restaurant</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
