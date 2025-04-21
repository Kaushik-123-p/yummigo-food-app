import React, { useEffect, useState } from 'react'
import { DotLoader } from 'react-spinners'

const Success = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading
          ? (
            <DotLoader color="#17c423" />
          )
          : (
            <div className='flex flex-col items-center justify-center h-screen'>
              <h1 className='text-4xl font-extrabold mb-5'>Order Successful! 🎉</h1>
              <p className='text-2xl font-semibold '>Thanks for ordering — your food is on the way!</p>
            </div>
          )
      }
    </div>
  )
}

export default Success


