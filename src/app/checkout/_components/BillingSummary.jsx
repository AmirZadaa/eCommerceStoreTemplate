
import CustomButton from '@/components/ui/CustomButton'
import React from 'react'
export default function BillingSummary() {
  const summarydata=[
    {
      title:"Sub Total",
      total_price: "$7.84",
    },
    {
      title:"Shipping",
      total_price: "$3.84",
    },
    {
      title:"Tax",
      total_price: "$1.84",
    }
    
  ]

  return (
    <div className='mt-6 bg-secondary relative space-y-8 p-8'>
      <div className='text-2xl font-bold'>Billing Summary</div>
      <hr />
      {summarydata.map((data,ind)=>
       <div className='relative ' key={ind}>
        <div className='text-xl '>{data.title}</div>
        <div className='text-2xl text-primary absolute right-1 top-1 font-bold'>{data.total_price}</div>
      </div>
    )}
    <hr />
    <div className='relative'>
      <span className='text-xl '>Total</span>
      <div className='text-2xl text-primary absolute right-1 top-1 font-bold'>$878</div>
    </div>
     <CustomButton title="Place Order" arialLabel="place order"/>
    </div>
  )
}
