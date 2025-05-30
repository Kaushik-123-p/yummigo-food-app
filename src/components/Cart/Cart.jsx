import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ItemCart from './ItemCart';
import { RiCloseFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [activeCart, setActiveCart] = useState(false)

  const cartItems = useSelector((state) => state.cart.cart)
  // const totalQty = cartItems.reduce((totalQty, item) => {
  //   return totalQty + item.qty
  // }, 0)
  // or
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)

  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)

  const navigate = useNavigate()

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[24vw] h-full p-5 bg-white flex flex-col rounded-t-md ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>


        <div className='mb-3 shrink-0'>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-extrabold text-gray-800'>My Order</span>
            <RiCloseFill
              onClick={() => setActiveCart(!activeCart)}
              className='border-2 border-gray-600 text-gray-600 font-bold text-2xl rounded-md cursor-pointer hover:text-red-400 hover:border-red-400' />
          </div>
        </div>


        <div className='flex-1 overflow-y-auto pr-1'>
          {
            cartItems.length > 0 ? cartItems.map((food) => {
              return (
                <ItemCart
                  key={food.id}
                  id={food.id}
                  img={food.img}
                  name={food.name}
                  price={food.price}
                  qty={food.qty} />
              )
            }) : <h2 className='text-gray-900 text-2xl text-center font-extrabold mt-32'>Your Cart is Empty</h2>
          }
        </div>


        <div className='mt-3 shrink-0'>
          <h3 className='font-semibold text-gray-800'>Items : {totalQty} </h3>
          <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>
          <hr className='w-full my-2' />
          <button
            onClick={() => navigate("/success")}
            className='bg-green-500 text-white font-bold px-3 py-2 rounded-lg w-full mb-2 cursor-pointer'>
            Checkout
          </button>
        </div>

      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed right-10 bottom-5 bg-white rounded-full shadow-md text-5xl p-3 ${totalQty > 0 && "animate-bounce delay-500 transition-all duration-200"}`} />
    </>
  )
}

export default Cart;
