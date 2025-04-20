import React, { useEffect, useState } from 'react'
import FoodData from "../../Data/FoodData.js"
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/slices/CategorySlice.jsx'

const CategoryMenu = () => {

  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))]
    setCategories(uniqueCategories)
    // console.log(uniqueCategories)
  }

  useEffect(() => {
    listUniqueCategories()
  }, [])

  return (
    <div className="px-4 py-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Find the best food</h3>
      </div>
      <div className="flex gap-3 overflow-x-scroll scroll-smooth pb-2 lg:overflow-x-visible">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition-all duration-200 shadow-sm  lg:hover:bg-green-500 lg:hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
          All
        </button>

        {
          categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full transition-all duration-200 shadow-sm  lg:hover:bg-green-500 lg:hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>
                {category}
              </button>
            )
          })
        }
      </div>
    </div>


  )
}

export default CategoryMenu