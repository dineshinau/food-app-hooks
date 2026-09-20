import NotFound from "./NotFound";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurentlist, setRestaurentList]=useState([]);
    const [allRestaurnats,setAllRestaurnats] = useState([]);
    const [all,setAll] = useState(true);
    const [searchText,setSearchText] = useState('');
    let btnText = "Top Rated"

    useEffect(() => {
        console.log('Use effect callded');
        fetchData();
    },[])

    const fetchData = async () => {
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

       const json = await data.json();
       const swigRest = json?.data?.cards[1]?.card?.card?.gridElements['infoWithStyle'].restaurants;
       const finalRest = swigRest.map((rest) => {
        return rest.info;
       })
       setRestaurentList(finalRest);
       setAllRestaurnats(finalRest);
    }

    console.log('Body rendered');

    // Conditional rendering
    return (allRestaurnats.length < 1) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
               <button className="rest-filter" onClick={() => {
                if(all){
                    setRestaurentList(restaurentlist.filter( (data) => data.avgRating>4.5));
                    setAll(false)
                }else{
                    setRestaurentList(allRestaurnats);
                    setAll(true)
                }
               }}>Show {all ? btnText : 'All'} Restaurants</button>

               <div className="search">
                <input id="search_text" type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                    if(searchText.length > 0){
                        setRestaurentList(allRestaurnats.filter((rest) => rest.name.toLowerCase().includes(searchText.toLowerCase()) ));
                    }
                }} />
                <button onClick={() => {
                    setRestaurentList(allRestaurnats.filter((rest) => rest.name.toLowerCase().includes(searchText.toLowerCase()) ));
                }}>Search</button>
               </div>
               <span className="show-total">Showing {all ? 'All' : 'Top rated'} {restaurentlist.length} restaurants.</span>
            </div>

            {restaurentlist.length<1 ? <NotFound /> :  <div className="rest-container">
                {restaurentlist.map((rest) => {
                  return <RestoCard key={rest.id} restData={rest} />
                })}
            </div>}
        </div>
    )
}
export default Body;
