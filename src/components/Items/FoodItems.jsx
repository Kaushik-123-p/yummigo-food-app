import React from 'react'
import FoodCard from '../Card/FoodCard'
import FoodData from '../../Data/FoodData.js'

const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start py-10'>
      {
        FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
            />
          )
        })
      }
    </div>
  )
}

export default FoodItems