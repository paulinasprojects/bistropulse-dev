"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import Image from "next/image";
import { addExtrasSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export const AddExtrasForm = () => {
  const form = useForm<z.infer<typeof addExtrasSchema>>({
    resolver: zodResolver(addExtrasSchema),
    defaultValues: {
      name: "",
      price : undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof addExtrasSchema>) => {
    console.log(values);
    form.reset();
  };


  return (
    <div className="mt-[60px]">
      <div className="flex max-sm:flex-col items-center lg:flex-row gap-[42px] xl:px-[227px] max-sm:items-center">
        <label htmlFor="add-extra-input" className="w-[140px] h-[140px] border-[1px] border-dotted border-buttonColor rounded-[8px] flex items-center justify-center cursor-pointer">
          <Image
            src="/glass.png"
            alt="glass"
            width={30}
            height={30}
          />
        </label>
        <input type="file" id="add-extra-input" title=" " style={{display: "none"}} />
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-1.5 bg-buttonColor hover:bg-buttonHover text-white rounded-[4px] w-[136px] h-[44px] text-ms font-bold">
            <Plus/>
            Food Image
          </button>
          <button className="w-[93px] h-[44px] bg-transparent border-[1px] border-[#EFEFEF] rounded-[4px] hover:bg-[#EFEFEF]">Remove</button>
        </div>
      </div>
      <div className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 xl:px-[227px]">
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Food Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Cheese pizza" type="text"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Food Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="$10" type="number"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-[136px] h-[44px] bg-buttonColor hover:bg-buttonHover text-white">Add Extra Food</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
