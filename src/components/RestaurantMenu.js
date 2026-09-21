import { useEffect, useState } from "react";
import {getMenuById} from "../utils/menu"
import { useParams } from "react-router-dom";

const RestaurantMenu = (data ) => {
    const [resData, setResData] = useState([]);
    useEffect( () => {
        fetchMenu();
    },[]);

    const {id}  = data;
    const {restId} = useParams();

    const fetchMenu = async () => {
        try{
            const data = await getMenuById(restId);
            setResData(data?.data?.cards);
        }catch(err){
            console.log(err);
        }
    }

    return ( resData?.length < 1 ? 'No restaurant found' :
        (<div className="resto-menu">
            <h3>{resData[0]?.card?.card?.text}</h3>
            <p>{resData[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name} - ₹ {(items?.card?.info?.price)/100}</li> )}
            </ul>
        </div>
        )
    )
}

export default RestaurantMenu;
