import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ShimmerUI from './ShimmerUI';

const RestaurantContainer = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState();

  /////////// useEffect hook:
  // called everytime when react component is rendered.
  // if dependency array is not present -> useEffect is calls it at every render.
  // if dependency array is empty []    -> useeffect is called on initial render(just once)
  // if dependency array is [listOfRestaurant]    -> useeffect is called everytime when listofrestaurant is updated
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const res = await data.json();
    // console.log(res);
    const cards = res.data.cards;
    setListOfRestaurant(cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(cards[1].card.card.gridElements.infoWithStyle.restaurants);

  };


  ///// conditional rendering
  return listOfRestaurant == 0 ? <ShimmerUI /> : (
    <div>
      <div>
        <p className='text-3xl text-center underline m-6 font-bold '>Top restaurant chains in Surat</p>
        <hr />

        <div className='flex justify-center items-center mt-5'>
          
          <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 mr-8 "
            onClick={() => {
              const filterRestVar = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
              setFilteredRestaurant(filterRestVar);
            }}>
            Top Rated Restaurants
          </button>

            <input onChange={(e)=>setSearchText(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  mr-2" placeholder="Search Restaurants"/>
            
            <button type="button" className=" text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 me-2 "
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search</button>
        </div>

        <div className='flex flex-wrap m-12 justify-center'>
          {filteredRestaurant.map((item) => {
            return <RestaurantCard 
              key={item?.info?.id} 
              image={item?.info?.cloudinaryImageId} 
              name={item?.info?.name} 
              rating={item?.info?.avgRating} 
              cuisines={item?.info?.cuisines} 
              locality={item?.info?.locality} 
              cost={item?.info?.costForTwo} 
              deliveryTime={item?.info?.deliveryTime} />
          })}
        </div>

      </div>
    </div>
  )
}

export default RestaurantContainer


// imageCDN : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w8zu0bxyw5bn9xuf6ukd'

// api : 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'