import RestoCard from "./RestoCard";
import restList from "../utils/mocData";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurentlist, setRestaurentList]=useState(restList);
    // const [all,setAll] = useState(true);
    const [count,setCount] = useState(' all '+restList.length);
    useEffect(() => {
        console.log('Use effect callded');
        fetchData();
    },[])

    const fetchData = async () => {
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

       const json = await data.json();
    //    console.log(json);
    //    console.log(json?.data?.cards[1]?.card?.card?.gridElements['infoWithStyle'].restaurants);
       const swigRest = json?.data?.cards[1]?.card?.card?.gridElements['infoWithStyle'].restaurants;
    //    console.log(swigRest);
       const finalRest = swigRest.map((rest) => {
        return rest.info;
       })
    //    console.log(finalRest);

       setRestaurentList(finalRest);
       setCount(' all '+finalRest.length)
    }

    console.log('Body rendered');

    return (
        <div className="body">
            <div className="filte">
               <button className="rest-filter" onClick={() => {
                const filteredRest = restaurentlist.filter( (data) => data.avgRating>4.6);
                setRestaurentList(filteredRest);
                setCount(' Top rated '+filteredRest.length)

                // if(all){
                //     setRestaurentList(restList.filter( (data) => data.avgRating>4.4));
                //     setAll(false);
                // }else{
                //     setAll(true)
                //     setRestaurentList(restList)
                // }

                // console.log(restList);
                // let filteredList = restList.filter((rest) => rest.avgRating>4.5);
                // console.log(filteredList);

               }}>Top Rated Restaurants</button>
               <button className="reset-filter" onClick={() => {
                setRestaurentList(restaurentlist);
                setCount(' all '+restaurentlist.length)
               }} >Show All</button>
               <span className="show-total">Showing {count} restaurants.</span>
            </div>

            <div className="rest-container">
                {restaurentlist.map((rest) => {
                  return <RestoCard key={rest.id} restData={rest} />
                })}
            </div>
        </div>
    )
}
export default Body;
