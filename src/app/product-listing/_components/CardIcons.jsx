import React from 'react'

import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { RefreshCcw } from 'lucide-react'

export default function CardIcons(){
  return (
    <div className='absolute space-y-2 right-1 top-12 rounded-full  h-0 overflow-hidden group-hover:h-64 duration-1000'>
        <div className='bg-background px-2 py-2 text-primary   rounded-full'><Search size={16}/></div>
        <div className='bg-background px-2 py-2 text-primary   rounded-full'><ShoppingCart size={16}/></div>
        <div className='bg-background px-2 py-2 text-primary   rounded-full'><RefreshCcw size={16}/></div>
    </div>
  )
}
