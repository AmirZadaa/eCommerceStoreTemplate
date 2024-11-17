import React from 'react'
import Image from 'next/image'
import {fashion3}  from '@/data/image'
import BillingSummary from './BillingSummary'

export default function OrderSummary() {
  return (
    <div className='mx-auto w-1/2'>
      <div className=' px-4 py-2 mt-4 bg-[#f8f8f8]'>
        <h2 className="text-2xl  mt-10 font-light">Summary Order</h2>
        <div className=' text-slate-400 text-lg'>For a better experience, verify your goods and choose your shipping option.</div>
        <hr/>
        {Array(2).fill(2).map((i,ind)=>
        <div className='mt-1 flex gap-4 space-y-6 border-b-2 relative p-4' key={ind}>
            <div className='w-20 aspect-[6/7]'>
                <Image src={fashion3} alt="fashion1" />
            </div>
            <div className='space-y-8'>
                <h3>Classic Jacket</h3>
                <span className='text-primary font-bold'>$7.84 x 1</span>
            </div>
            <span className='absolute right-2 top-2 text-2xl text-primary text-bold'>$7.84</span>
        </div>
            )}
        
      </div>
      <BillingSummary/>
    </div>
  )
}
