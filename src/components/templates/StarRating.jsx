import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StarRating = ({rating})=>{

    return(
        <div className="starRating">
            <FontAwesomeIcon icon={faStar} className={`star ${rating > 0 ? "fill" : ""}`}/>
            <FontAwesomeIcon icon={faStar} className={`star ${rating > 1 ? "fill" : ""}`}/>
            <FontAwesomeIcon icon={faStar} className={`star ${rating > 2 ? "fill" : ""}`}/>
            <FontAwesomeIcon icon={faStar} className={`star ${rating > 3.5 ? "fill" : ""}`}/>
            <FontAwesomeIcon icon={faStar} className={`star ${rating > 4.5 ? "fill" : ""}`}/> 
        </div>
    )
}
export default React.memo(StarRating)