import React from 'react'
import OrderSummary from './_components/OrderSummary'
import AccountDetails from './_components/AccountDetailsForm'
import ShippingDetailsForm from './_components/ShippingDetailsForm'
import  PaymentMethod  from './_components/PaymentMethod'

export default function Page(){
  return (
    <div className=''>
      <div className=' text-center p-4 bg-secondary space-y-4'>
        <h1 className='font-bold text-2xl'>Checkout</h1>
        <div className='text-md font-semibold'>Home/ Checkout</div>
      </div>
      <section className="grid grid-cols-2 gap-8  max-lg:grid-cols-1 mt-8 p-6 ">
        <div className='space-y-6'>
          <AccountDetails/>
          <ShippingDetailsForm/>
          <PaymentMethod/>
        </div>
          <OrderSummary/>
      </section>
    </div>
  )
}

