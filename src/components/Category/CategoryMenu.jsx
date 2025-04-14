import React from 'react'

const CategoryMenu = () => {
  return (
    <div className="px-4 py-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Find the best food</h3>
      </div>
      <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2 lg:overflow-x-visible">
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition duration-200 shadow-sm lg:hover:bg-green-500 lg:hover:text-white">
          All
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition duration-200 shadow-sm lg:hover:bg-green-500 lg:hover:text-white">
          Breakfast
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition duration-200 shadow-sm lg:hover:bg-green-500 lg:hover:text-white">
          Lunch
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition duration-200 shadow-sm lg:hover:bg-green-500 lg:hover:text-white">
          Dinner
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition duration-200 shadow-sm lg:hover:bg-green-500 lg:hover:text-white">
          Snacks
        </button>
      </div>
    </div>


  )
}

export default CategoryMenu