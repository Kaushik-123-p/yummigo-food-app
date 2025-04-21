import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from "../../redux/slices/SearchSlice"

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center py-3 mb-10'>
      <div className='text-xl font-bold text-gray-600'>
        <h3>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-2xl font-bold text-gray-800'>YummiGo Foods</h1>
      </div>
      <div className='mt-4 lg:mt-0'>
        <input
          type="search"
          name="search"
          id="search"
          placeholder='Search here...'
          autoComplete='off'
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] focus:ring-2 focus:ring-green-500 focus:border-green-500'
        />
      </div>
    </nav>

  )
}

export default Navbar