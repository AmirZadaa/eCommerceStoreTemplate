import React from 'react'
import Image from 'next/image'
import { Trash2 } from "lucide-react"
import { Pencil } from "lucide-react"
import { fashion1 } from "@/data/image"

export default function CartItem() {
  return (
    <>
    {Array(24).fill(0).map((item,index)=>
          <div className="grid grid-cols-3 gap-4 py-2 border-b-2 max-sm:gap-1" key={index}>
            <div className="w-24 p-2 bg-slate-50 aspect-6/7 ">
              <Image    
                src={fashion1} 
                alt="fashion1" 
                className="object-contain" 
                sizes='80px'
              />
            </div>
            <div className="space-y-1">
              <h2>Title</h2>
              <div>Price</div>
              <div>Colors</div>
            </div>
           <div className="space-y-3 text-end">
              <div className="space-x-2">
                  <button className="px-2 py-2 bg-slate-50 "><Pencil size={20} className="inline-block"/></button>
                  <button className="px-2 py-2 bg-slate-50 "><Trash2 size={20} className="inline-block"/></button>
              </div>
              <div className='flex justify-between items-center bg-slate-50 '>
                  <button  className=" px-2 rounded-none font-light text-2xl">-</button>
                  <span>1</span>
                  <button className="py-2 px-2 rounded-none font-light text-2xl">+</button>
               </div>
           </div>
          </div>
      )}
    </>
  )
 
}
