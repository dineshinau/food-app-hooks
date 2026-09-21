import { useEffect, useState } from "react";
import {getMenuById} from "../utils/menu"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resData, setResData] = useState([]);
    useEffect( () => {
        fetchMenu();
    },[]);

    const {restId} = useParams();

    const fetchMenu = async () => {
        try{
            const data = await getMenuById(restId);
            // console.log(data);

            setResData(data?.data?.cards);
        }catch(err){
            console.log(err);
        }
    }

    return ( resData?.length < 1 ? (<div className="no-data"><p className="no-data-msg">JSON Data for the restaurant is not added yet. Please check anoter restaurant.</p></div>) :
        (<div className="resto-menu">
            <h3>{resData[0]?.card?.card?.text}</h3>
            <p>{resData[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name} - ₹ {(items?.card?.info?.price || items?.card?.info?.defaultPrice)/100}</li> )}
            </ul>
        </div>
        )
    )
}

export default RestaurantMenu;
