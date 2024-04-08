const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    // console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);
    // const json = await data.json();
    console.log(json.data);
    console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);

    // setListOfRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);

};