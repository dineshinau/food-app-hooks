import RestoCard from "./RestoCard";
import restList from "../utils/mocData";
import { useState } from "react";
import restList from "../utils/mocData";
import restList from "../utils/mocData";

const Body = () => {
    const [restaurentlist, setRestaurentList]=useState(restList);
    return (
        <div className="body">
            <div className="filte">
               <button className="rest-filter" onClick={() => {
                setRestaurentList(restList.filter( (data) => data.avgRating>4.5))
               }}>Top Rated Restaurants</button>
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
