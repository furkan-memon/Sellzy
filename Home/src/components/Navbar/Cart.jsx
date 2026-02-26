import React from 'react'
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
     <li className='flex gap-3 justify-center items-center'>
        <div className='bg-[#ffc107] px-3 py-3 rounded-full'>
        <ShoppingCart size={16} />
        </div>
        <div className=' flex-col hidden xl:flex'>
            <span className=''>Cart</span>
            <span>0-Items</span>
        </div>
    </li>
  )
}

export default Cart
