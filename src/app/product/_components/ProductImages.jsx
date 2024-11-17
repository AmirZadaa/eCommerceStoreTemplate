import React from 'react'
import { CarouselPage } from './CarouselPage'
import Image from 'next/image'
import { products } from '@/data/data'
export default function ProductImages() {
  return (
    <div className='max-[1200px]:col-span-3 max-md:col-span-1'>
        <CarouselPage/>
        <div className='flex gap-2  mt-1'>
        {products[5].img_variant.map((img,index)=> (
          <div className='w-full aspect-[6/7] relative' key={index}>
            <Image 
               fill 
               src={img} 
              alt={`fashion ${index}`} 
              className='object-contain'
              sizes='(max-width: 640px) 144px, (max-width: 1024px) 235px, 96px'
            />
          </div>
        ))} 
      </div>
    </div>
  )
}
