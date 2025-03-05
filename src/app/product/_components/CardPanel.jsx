
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CartItem from "./CartItem"
import Link from "next/link"
import CustomButton from "@/components/ui/CustomButton"
export default function CardPanel({ children }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl p-0 bg-background">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-2xl font-bold">Cart (1)</SheetTitle>
          </SheetHeader>
          <div className="flex-grow overflow-auto p-4 ">
            <button 
              className="float-right  font-bold text-lg text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Clear Cart
            </button>
            <div className="clear-both mt-4 space-y-4">
              <CartItem />
            </div>
          </div>
          <SheetFooter className="p-4 border-t mt-auto">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Sub Total:</span>
                <span className="text-primary text-xl font-bold">$567.9</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Link href="view-cart" passHref legacyBehavior>
                  <CustomButton  title="View Cart" className="w-full sm:w-1/2" />
                </Link>
               <Link href="/checkout" aria-label='checkout' className='block w-full'><CustomButton title="Check Out" className="w-full sm:w-1/2" /></Link>
              </div>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}