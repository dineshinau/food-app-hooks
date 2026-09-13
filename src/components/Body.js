import RestoCard from "./RestoCard";
import restList from "../utils/mocData";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurentlist, setRestaurentList]=useState(restList);
    // const [all,setAll] = useState(true);
    const [count,setCount] = useState(' all '+restList.length);
    useEffect(() => {
        console.log('Use effect callded');
    },[])

    console.log('Body rendered');

    return (
        <div className="body">
            <div className="filte">
               <button className="rest-filter" onClick={() => {
                const filteredRest = restList.filter( (data) => data.avgRating>4.6);
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
                setRestaurentList(restList);
                setCount('all '+restList.length)
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
