import React from 'react'
import { Star } from "lucide-react";
export default function ProductDetails() {
  return (
    <div className='space-y-3  max-md:mx-auto'>
       <h1 className='text-2xl font-bold'>tan cargo shorts</h1>
       <div><span className='font-bold'>Description: </span> it is super quality product available in very cheap price</div>
       <div className='space-x-3'>
         <div className='inline-block'>
         <span className='font-bold'>MRP: </span>
         <span className='text-primary font-bold'>$566</span>
         </div>
         <span className="line-through text-secondary-foreground font-light">$455</span>
         <span className='px-2 py-1  bg-primary-100 text-primary-700'>9% Off</span>
       </div>
       <div className=''>
        <div className='flex gap-1 items-center'>    
            {Array.from({length:4}).map((_,index)=> (
            <Star key={index} size={20} className='text-primary fill-primary '/>
            ))}
            <span className='text-secondary-foreground'>|</span>
            <span className='underline font-light ms-2'>1 Review</span>
       </div>
       </div>
       <div className="flex gap-2">
        <span  className='font-bold '>Colors:</span>
        {/* {["#00ffff", "#0000ee", "#11aa11"].map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item}}
            className={`py-[10px] px-[10px] inline-block rounded-full   `}
          ></div>
        ))} */}
      </div>
      <div><span className='font-bold'>Status: </span> In stack</div>
      <div><span className='font-bold'>Qauntity: </span> 13 Items Left</div>
    </div> 
  )
}
