import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ItemCart = () => {
  return (
    <div className='flex items-center gap-2 rounded-lg shadow-md p-2 mb-3 relative '>
      <MdDelete className='absolute right-7 top-3 text-gray-600 cursor-pointer' />
      <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt=""
        className='w-[50px] h-[50px]' />

      <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
        <div className='flex justify-between gap-2'>
          <span className='text-green-500 font-bold'>₹150</span>
          <div className='flex items-center justify-between gap-2 absolute right-7'>
            <FaPlus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer' />
            <span>1</span>
            <FaMinus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart