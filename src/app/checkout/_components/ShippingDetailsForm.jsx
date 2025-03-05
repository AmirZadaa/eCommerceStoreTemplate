
"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  state: z.string({
    required_error: "Please select a state.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  pincode: z.string().regex(/^\d{6}$/, {
    message: "Pincode must be 6 digits.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits.",
  }),
})

export default function ShippingDetailsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      address: "",
      state: "",
      city: "",
      pincode: "",
      phone: "",
    },
  })

  return (
    <div className="bg-secondary  h-fit w-auto space-y-8 p-8">
      <h1 className="text-2xl font-bold">Shipping Details</h1> 
      <hr/>
    <Form {...form}>
      <form  className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Title *</FormLabel>
              <FormControl  className="bg-background">
                <Input placeholder="Enter Title" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Address *</FormLabel>
              <FormControl className="bg-background">
                <Input placeholder="Enter Address" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>State *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}
                 aria-labelledby="state-label">
                <FormControl className="bg-background">
                  <SelectTrigger aria-label="state-label" id="state-select">
                    <SelectValue placeholder="Select"  />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="maharashtra" >Maharashtra</SelectItem>
                  <SelectItem value="gujarat" >Gujarat</SelectItem>
                  <SelectItem value="karnataka" >Karnataka</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>City *</FormLabel>
              <FormControl className="bg-background">
                <Input placeholder="Enter City" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem >
              <FormLabel className='font-semibold'>Pincode *</FormLabel>
              <FormControl className="bg-background">
                <Input placeholder="Enter Pincode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Phone *</FormLabel>
              <FormControl className="bg-background">
                <Input placeholder="Enter Phone Number"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
    </div>
  )
}