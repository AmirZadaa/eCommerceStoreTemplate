import React from 'react'
import ProductImages from './_components/ProductImages'
import ProductDetails from './_components/ProductDetails'
import AddToCard from './_components/AddToCard'
export default function Page() {
  return (
    <div className='container mx-auto mt-4 mb-28 '>
      <h1 className='mb-9 text-center text-2xl font-bold'>tan cargo shorts</h1>
      <div className='grid grid-cols-3 gap-8 px-20 max-[1200px]:grid-cols-2  max-md:grid-cols-1 max-sm:px-4 max-wide:px-6'>
       <ProductImages/>
       <ProductDetails/>
       <AddToCard/>
      </div>
    </div>
  )
}




