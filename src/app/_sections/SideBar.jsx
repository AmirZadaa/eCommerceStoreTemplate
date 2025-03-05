
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import {navLinks} from '@/assets/data'

export default function SideBar({ children }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="left" className="w-ful bg-background">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-2xl font-bold text-primary">
              Menu
            </SheetTitle>
          </SheetHeader>
          <ul className='space-y-5 py-2'>
          {navLinks.map((item, index) => (
            <li key={index} className='group'>
              <Link href={item.link}>{item.name}</Link>
              <div className='w-0 group-hover:w-10 h-[2px] duration-300 bg-primary'></div>
            </li>
          ))}
        </ul>

          <SheetFooter className="p-4 border-t mt-auto">
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}