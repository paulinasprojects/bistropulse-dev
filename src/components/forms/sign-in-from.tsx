"use client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import Image from "next/image";
import { Button } from "../ui/button";

export const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
    form.reset();
    router.push("/");
  };

  return (
    <div className="bg-white max-w-[480px] max-sm:max-w-[350px] h-[440px] rounded-md mx-auto">
      <div className="pt-8 pl-10 max-sm:pl-4">
      <Image
        src="/bistro-logo.svg"
        alt="logo"
        width={219}
        height={51}
        className=""
      />
      <p className="mt-8 text-sm font-semibold leading-[24px] text-[#111315]">Sign up with Email and Password</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-3 flex flex-col gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" {...field} className="border-[1px] border-[#6F767E] max-w-[400px] max-sm:max-w-[300px]" placeholder="example@email.com"/>
                  </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" {...field} placeholder="********" className="border-[1px] border-[#6F767E] max-w-[400px]  max-sm:max-w-[300px]"/>
                  </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#2A85FF] text-white rounded-[4px] max-w-[400px] max-sm:max-w-[300px]">Sign up</Button>
            <Button variant="outline" className="mt-3 text-black rounded-[4px] max-w-[400px] max-sm:max-w-[300px] border-[1px] border-[#6F767E] flex items-center gap-5">
              <FcGoogle/>
              Sign up with Google
            </Button>
          </div>
        </form>
      </Form>

      </div>
    </div>
  )
}
