import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CategoryMenu from '../components/Category/CategoryMenu'
import FoodItems from '../components/Items/FoodItems'
import Cart from '../components/Cart/Cart'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  )
}

export default Home