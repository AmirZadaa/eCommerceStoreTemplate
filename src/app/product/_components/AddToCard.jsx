import React from 'react'
import {ChevronLeft,ChevronRight} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShoppingCart,Heart ,RefreshCcw,Share2 } from 'lucide-react'
import CardSheet from './CardSheet'

export default function AddToCard() {
  return (
       <div className='flex flex-col justify-center  space-y-4 border-2 h-fit py-4 px-2 max-md:px-20 max-xs:px-2'>
         <div className='h-12 flex justify-between items-center w-32 mx-auto border-2'>
            <Button aria-label="plus" className="py-1 px-2 rounded-none"><ChevronLeft size={20}/></Button>
            <span>1</span>
            <Button aria-label="minus" className="py-1 px-2 rounded-none"><ChevronRight size={20}/></Button>
         </div>
         <div className='flex w-full justify-center mx-auto  gap-2 mt-4 max-sm:flex-col '>
           <CardSheet>
             <Button aria-label="add to card" className='p-6 font-bold text-md rounded-none w-full'><ShoppingCart size={25}/>Add to cart</Button>
           </CardSheet>
           <Button className=' p-6 font-bold text-md rounded-none w-full '>Buy Now</Button>
         </div>
         <div className='flex gap-4 justify-between items-center max-sm:flex-col max-sm:gap-2'>
          <div><Heart size={20} className='inline-block'/> <span>Add To Wishlist</span></div>
          <div><RefreshCcw size={20} className='inline-block'/> <span>Add To Compare</span> </div>
         </div>
         <div className='text-center'><Share2 size={30} className='inline-block pr-2'/> <span>Share</span> </div>
      </div> 
  )
}
