import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from "../../slices/CartSlice"

const ItemCart = ({ id, img, name, price, qty }) => {

  const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-2 rounded-lg shadow-md p-2 mb-3 relative '>
      <MdDelete
        onClick={() => dispatch(removeFromCart({ id, img, name, price, qty }))}
        className='absolute right-7 top-3 text-gray-600 cursor-pointer' />
      <img src={img} alt=""
        className='w-[50px] h-[50px]' />

      <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between gap-2'>
          <span className='text-green-500 font-bold'>₹{price}</span>
          <div className='flex items-center justify-between gap-2 absolute right-7'>
            <FaMinus
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id, img, name, price, qty }))}
              className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart