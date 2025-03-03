"use client";

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addCustomerSchema} from "@/lib/schemas";
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export const AddCustomerForm = () => {
  const form = useForm<z.infer<typeof addCustomerSchema>>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      name: "",
      student: false,
      email: "",
      phone: undefined,
      gender: undefined,
      location: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof addCustomerSchema>) => {
    console.log(values);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 xl:px-[227px]">
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Chelsie Johnson' type='text'/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name='student'
              control={form.control}
              render={({field}) => (
                <FormItem className='flex items-center flex-row space-x-2 !space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}    
                    />
                  </FormControl>
                  <FormLabel>University student</FormLabel>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex lg:flex-row gap-4 md:flex-col max-sm:flex-col">
              <FormField
                name='email'
                control={form.control}
                render={({field}) => (
                  <FormItem
                  >
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='example@mail.com' type='email' className='lg:w-[331px] max-sm:w-full'/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                name='phone'
                control={form.control}
                render={({field}) => (
                  <FormItem
                  >
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='(+123) 4567890' type='number' className='lg:w-[310px] max-sm:w-full'/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='gender'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-row gap-[22px]'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Male' className='text-green-500'/>
                        </FormControl>
                        <FormLabel className='font-normal'>Male</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Female'  className='text-green-500'/>
                        </FormControl>
                        <FormLabel className='font-normal'>Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='location'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Textarea {...field} className='resize-none w-full'/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type='submit' className='w-[138px] h-[44px] bg-[#2A85FF] hover:bg-[#4291f8]'>
              Add Customer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
