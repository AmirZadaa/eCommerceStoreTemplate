import React from 'react'
import ProductImages from './_components/ProductImages'
import ProductDetails from './_components/ProductDetails'
import AddToCard from './_components/AddToCard'
export default function Page() {
  return (
    <div className='container mx-auto mb-28'>
      <div className="text-center p-4 bg-secondary  space-y-4 ">
            <h1 className="font-semibold text-2xl ">tan cargo shorts</h1>
            <div className="text-md font-semibold">Home/ product</div>
      </div>
      <div className='grid grid-cols-3 gap-8 px-20 max-[1200px]:grid-cols-2  max-md:grid-cols-1 max-sm:px-4 max-wide:px-6 mt-4'>
       <ProductImages/>
       {/* <ProductDetails/>
       <AddToCard/> */}
      </div>
    </div>
  )
}




