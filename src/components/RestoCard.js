import StyleCard from "./StyleCard";
import { Link } from "react-router-dom";
const RestoCard = (restData) => {
    const {
        id, name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId
     } = restData.restData;

    return (
        <div id={id} className="resto-card" style={StyleCard}>
            <img style={{width:"200px", height:"200px"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <Link to={"/restaurants/"+id}><h3>{name}</h3></Link>
            <p>{cuisines.join(', ')}</p>
            <span>{avgRating}</span>
            <p>{costForTwo}</p>
            <h5>{sla?.slaString}</h5>
        </div>
    )
}

export default RestoCard;
