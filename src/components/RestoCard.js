import StyleCard from "./StyleCard";
const RestoCard = ({restName, cuisine, rating, delivery}) => {
    // console.log(props);
    // const {restName, cuisine, rating, delivery} = props;
    return (
        <div className="resto-card" style={StyleCard}>
            <img style={{width:"300px", height:"250px"}} src="https://dineshinaublog.wordpress.com/wp-content/uploads/2026/09/restaurant-logo.jpg" />
            <h3>{restName}</h3>
            <p>{cuisine}</p>
            <span>{rating}</span>
            <h5>{delivery}</h5>
        </div>
    )
}

export default RestoCard;
