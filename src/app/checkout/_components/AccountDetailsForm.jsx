"use client"
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

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().optional(),
})

const formFields = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Full Name",
    description: "Your full name required.",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    description: "Your primary email required.",
  },
  {
    name: "username",
    label: "Username",
    placeholder: "Username",
    description: "This is your public display name.",
  },
  {
    name: "phone",
    label: "Phone Number (Optional)",
    placeholder: "+92 (555) 123-4567",
    type: "tel",
    description: "Your contact phone number.",
  },

]

export default function AccountDetailsForm() {  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      username: "",
      phone: "",
    },
  })

  
  return (
    <div className="bg-secondary  h-fit w-auto space-y-8 p-8">
     <h1 className="text-2xl font-bold">Account Details</h1>
     <hr />  
    <Form {...form}  className="">
      <form  className=" grid grid-cols-2 gap-8 max-sm:grid-cols-1">    
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            className=" "
            render={({ field: formField }) => (
              <FormItem className="">
                <FormLabel className='font-semibold'>{field.label}</FormLabel>
                <FormControl className="bg-background">
                  <Input 
                    placeholder={field.placeholder} 
                    type={field.type || "text"} 
                    {...formField} 
                    aria-label={field.label}
                  />
                </FormControl>
                <FormDescription>
                  {field.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
    </div>
  )
}