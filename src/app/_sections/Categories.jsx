import Image from 'next/image'
import React from 'react' 
import { categories } from '@/assets/data'
export default function Categories() {
  return (
    <div className='mt-10 px-10'> 
        <h1 className='text-4xl font-bold line text-center'>OUR  CATEGORIES</h1>          
      <div className='grid grid-flow-col auto-cols-[200px] overflow-auto mt-10 gap-8  mx-auto  px-6 py-6'>
        {categories.map((category,ind)=>
           <div className='flex flex-col justify-center items-center group'  key={ind}>
            <div className='w-full aspect-[0.9776]  rounded-full group-hover:ring-4 duration-200 relative'>
              <Image 
              src={category.img_url} 
              alt={category.title} 
              className='w-full h-full object-cover'
              fill 
              sizes='188px'
              />
            </div>
            <h2 className='text-lg font-semibold   mt-4'>{category.title}</h2>
          </div>
        )}
      </div>

    </div>
  )
}
