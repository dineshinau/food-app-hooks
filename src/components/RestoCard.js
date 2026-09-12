import StyleCard from "./StyleCard";
const RestoCard = (restData) => {
    const {
        name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId
     } = restData.restData;

    return (
        <div className="resto-card" style={StyleCard}>
            <img style={{width:"300px", height:"280px"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <span>{avgRating}</span>
            <p>{costForTwo}</p>
            <h5>{sla?.slaString}</h5>
        </div>
    )
}

export default RestoCard;
