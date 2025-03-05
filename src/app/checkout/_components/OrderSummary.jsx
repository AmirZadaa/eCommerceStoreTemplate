import React from 'react'
import Image from 'next/image'
import {fashion3}  from '@/assets/image'
import BillingSummary from './BillingSummary'

export default function OrderSummary() {
  return (
    <div className='mx-auto '>
      <div className=' px-4 bg-secondary space-y-2 p-8'>
        <h1 className="mt-10te text-2xl font-bold">Summary Order</h1>
        <div className='text-secondary-foreground text-lg'>For a better experience, verify your goods and choose your shipping option.</div>
        <hr/>
        {Array(2).fill(2).map((i,ind)=>
        <div className='mt-1 flex gap-4 space-y-6 border-b-2 relative p-4' key={ind}>
            <div className='w-20 aspect-[6/7] relative'>
                <Image src={fashion3} alt="fashion1" fill sizes="80px" priority/>
            </div>
            <div className='space-y-8'>
                <h2 className='font-semibold'>Classic Jacket</h2>
                <span className='text-primary font-bold'>$7.84 x 1</span>
            </div>
            <span className='absolute right-2 top-2 text-2xl text-primary font-bold'>$7.84</span>
        </div>
        )}
      </div>
      <BillingSummary/>
    </div>
  )
}
