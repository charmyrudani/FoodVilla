import React from 'react'
import {IMG_CDN} from '../utils/constant'

const RestaurantCard = ({name,rating, cuisines, image, locality, deliveryTime}) => {
  return (
    <div>
      <div className='p-4 pt-1 w-[18rem] flex flex-col m-2 mb-10 hover:transform hover:scale-105 hover:translate-all shadow-lg'>
      
        <img className='w-64 h-40 my-3 flex m-auto'
          src={IMG_CDN + image} alt="image" />
        
        <p className='mt-1 font-bold text-xl truncate'>{name}</p>
        <p className='mt-1 font-medium truncate'>{cuisines.join(', ')}</p>
        <p className='mt-1'>{rating} rating</p>
        <p className='mt-1'>{locality}</p>
        <p className='mt-1'>{deliveryTime}</p>
        <div className='flex gap-5 mt-2'>
          {/* <p className='text-green-500 font-bold'>${newPrice}</p>
          <p className='line-through text-gray-500'>${oldPrice}</p> */}
          {/* <p>{names}</p> */}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
