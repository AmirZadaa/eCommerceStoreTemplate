import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from "@/components/ui/button"
  import CartItem from "./CartItem"
  import Link from "next/link"

  export default function CartSheet({ children }) {
    return (
      <Sheet className="">
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
        <SheetContent   className="fixed w-screen h-screen bg-background  z-50 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Cart(1)</SheetTitle>
            <hr />
          </SheetHeader>
          <div className="right-1 text-right font-bold text-lg text-primary">Clear Card</div>
          <div className="h-96 overflow-auto scrollbar-custom p-1 space-y-2">
            <CartItem/>
          </div>
          <SheetFooter className="mt-6  grid grid-cols-1 pr-4 ">
            <hr />
            <div className="w-full flex justify-between border-b-2 mt-2">
              <span className="text-start text-2xl">Sub Total:</span>
              <span className="text-primary  text-2xl">$567.9</span>
            </div>
          <div className='space-x-6 m-0 mt-6 flex'>
            <Link href="card" aria-label="go to the card page" ><Button className='font-bold  px-6 py-6  text-lg rounded-none w-full bg-primary'>View Card</Button></Link>
            <Button className=' font-bold text-lg rounded-none  w-full bg-primary px-3 py-6 '>Check Out</Button>
         </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  }
  