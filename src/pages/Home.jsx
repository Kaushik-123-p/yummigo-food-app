import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CategoryMenu from '../components/Category/CategoryMenu'
import FoodItems from '../components/Items/FoodItems'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </div>
  )
}

export default Home