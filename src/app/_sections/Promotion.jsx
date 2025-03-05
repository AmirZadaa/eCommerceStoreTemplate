import React from 'react'
import {prom1,prom2} from '@/assets/image/index'
import Image from 'next/image'

export default function Promotion() {
  return (
    <div className='grid grid-cols-2 gap-8 px-10 max-md:grid-cols-1  mt-10'>
      <div className='w-full aspect-[1.739] relative   '>
        <Image 
        fill 
        src={prom1} 
        alt='promotion' 
        className='object-cover'
        sizes="(max-width: 624px) 400px, (max-width: 786px) 560px,(max-width: 1024px) 328px, 590px"
        />
      </div>
      <div className='w-full aspect-[1.739] relative'>
        <Image 
        src={prom2} 
        alt='promotion2' 
        className='w-full'
        fill
        sizes="(max-width: 624px) 400px, (max-width: 786px) 560px,(max-width: 1024px) 328px, 590px"
        />  
      </div>
    </div> 
  )
}
