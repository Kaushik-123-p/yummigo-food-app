import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import ItemCart from './ItemCart';

const Cart = () => {
  return (
    <>
      <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white  '>
        <div className='flex items-center justify-between my-3'>
          <span className='text-2xl font-extrabold text-gray-800'>My Order</span>
          <RiCloseFill className='border-2 border-gray-600 text-gray-600 font-bold text-2xl rounded-md cursor-pointer hover:text-red-400 hover:border-red-400' />
        </div>

        <ItemCart />


        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>Items : </h3>
          <h3 className='font-semibold text-gray-800'>Total Amount : </h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button className='bg-green-500 text-white font-bold px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>

        </div>
      </div>
    </>
  )
}

export default Cart