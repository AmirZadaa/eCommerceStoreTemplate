import React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { products } from '@/assets/data'
export default function ProductImages() {
  return (
    <div className='max-[1200px]:col-span-3 max-md:col-span-1'>
      <Carousel >
        <CarouselContent>
          {products[5].img_variant.map((img,index)=> (
            <CarouselItem key={index}>
              <div className="w-full aspect-[6/7] relative">
                    <Image 
                        fill 
                        src={img} 
                        alt={`fashion ${index}`} 
                        className='object-cover'
                        priority
                        sizes="(max-width: 	640px) 98vw, (max-width: 768px) 480px,(max-width: 1024px) 608px, 304px"
                    />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className="-left-4 w-8 h-8"/>
        <CarouselNext className="-right-4  w-8 h-8" />
      </Carousel>
        
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
