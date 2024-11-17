
import React from 'react'

export default function BillingSummary() {
  return (
    <div className='mt-4 bg-[#f8f8f8] relative space-y-8'>
      <div className='text-2xl'>Billing Summary</div>
      <hr />
      <div>
        <div>Sub Total</div>
        <div className='bg-orange-600'>$55</div>
      </div>
    </div>
  )
}
