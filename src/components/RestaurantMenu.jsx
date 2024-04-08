import React, { useEffect } from 'react'

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenuAPI();
    },[]);

    const fetchMenuAPI = async ()=>{
        const data = await fetch ('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=66592&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        console.log(json);
    };

  return (
    <div>
        <h1>Restaurant Name</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>d</li>
            <li>d</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu
