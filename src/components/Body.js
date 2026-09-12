import RestoCard from "./RestoCard";
import restList from "../utils/mocData";
import { useState } from "react";

const Body = () => {
//    const [restaurentlist, setRestaurentList]=useState(restList);
    return (
        <div className="body">
            <div className="filte">
               <button className="rest-filter" onClick={() => {
                console.log("clicked");

               }}>Top Rated Restaurants</button>
            </div>

            <div className="rest-container">
                {restList.map((rest) => {
                  return <RestoCard key={rest.info.id} restData={rest.info} />
                })}
            </div>
        </div>
    )
}
export default Body;
