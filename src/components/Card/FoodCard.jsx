import React from 'react'
import { FaStar } from "react-icons/fa";

const FoodCard = ({ img, name, price, desc, rating }) => {
  return (
    <div className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-lg gap-4 shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={img}
        alt="Onion Pizza"
        className="m-auto h-[130px] rounded-md object-cover hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
      />

      <div className="text-sm flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="text-lg text-green-500 font-bold">₹{price}</span>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        {desc.slice(0, 60)}...
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center text-yellow-400 text-sm font-semibold">
          <FaStar className="mr-1" /> {rating}
        </span>
        <button className="p-2 bg-green-500 text-white hover:bg-green-700 rounded-lg text-sm transition-colors duration-300">
          Add To Cart
        </button>
      </div>
    </div>

  )
}

export default FoodCard