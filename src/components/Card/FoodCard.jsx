import React from 'react'
import { FaStar } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-lg gap-4 shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="Onion Pizza"
        className="m-auto h-[130px] rounded-md object-cover hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
      />

      <div className="text-sm flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Onion Pizza</h2>
        <span className="text-lg text-green-500 font-bold">₹180</span>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nobis?
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center text-yellow-400 text-sm font-semibold">
          <FaStar className="mr-1" /> 4.5
        </span>
        <button className="p-2 bg-green-500 text-white hover:bg-green-700 rounded-lg text-sm transition-colors duration-300">
          Add To Cart
        </button>
      </div>
    </div>

  )
}

export default FoodCard