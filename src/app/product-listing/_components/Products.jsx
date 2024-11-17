import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/data/data.js'
export default function Products() {
  return (
    <div className='container mx-auto px-10 gap-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {products.map((product,index)=><ProductCard products={product} key={index}/> )}
    </div>
  )
}
