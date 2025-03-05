import React from 'react'
import Image from 'next/image'
import { Trash2 } from "lucide-react"
import { Pencil } from "lucide-react"
import { fashion1 } from "@/assets/image"
export default function CartItem() {
  return (
    <>
    {Array(24).fill(0).map((item,index)=>
          <div className="flex justify-between gap-4 py-2 border-b-2 max-sm:gap-1" key={index}>
            <div className='flex gap-6'>
            <div className="w-24 p-2 bg-secondary aspect-6/7 ">
              <Image    
                src={fashion1} 
                alt="fashion1" 
                className="object-contain" 
                sizes='80px'
              />
            </div>
            <div className="space-y-1">
              <h2 className='font-semibold'>Title</h2>
              <div className='font-semibold'>Price</div>
              <div className='font-semibold'>Colors</div>
            </div>
            </div>
           <div className="space-y-3 text-end w-28">
              <div className="space-x-2">
                  <button className="px-2 py-1 bg-secondary "><Pencil size={15} className="inline-block"/></button>
                  <button className="px-2 py-1 bg-secondary "><Trash2 size={15} className="inline-block"/></button>
              </div>
              <div className='flex justify-between items-center bg-secondary'>
                  <button  className=" px-2 rounded-none font-light text-2xl">-</button>
                  <span>1</span>
                  <button className="py-1 px-2 rounded-none font-light text-2xl">+</button>
               </div>
           </div>
          </div>
      )}
    </>
  )
 
}
