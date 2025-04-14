import React from 'react'

const CategoryMenu = () => {
  return (
    <div>
      <div>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
      </div>
      <div className='my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth'>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snakes</button>
      </div>
    </div>
  )
}

export default CategoryMenu