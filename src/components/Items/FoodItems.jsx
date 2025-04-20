import React from 'react'
import FoodCard from '../Card/FoodCard'
import FoodData from '../../Data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { CgEditUnmask } from 'react-icons/cg';

const FoodItems = () => {

  const category = useSelector((state) => state.category.category)

  const notify = (name) => toast.success(`Added ${name}`)
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-10 justify-center lg:justify-start py-10'>

        {
          FoodData.filter((food) => {
            if (category === "All") {
              return food
            }
            else {
              return category === food.category
            }
          }).map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              notify={notify}
            />
          ))
        }
      </div>
    </>
  )
}

export default FoodItems