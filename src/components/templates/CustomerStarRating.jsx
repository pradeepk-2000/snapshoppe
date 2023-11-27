import React, { useState } from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerStarRating = () => {
  const [rating, setRating] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(-1);

  const handleMouseEnter = (index) => {
    console.log(index);
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (!rating) {
      setHoveredRating(null);
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className='customer-rating'>
      <span>Rating &nbsp;</span>
      {[...Array(5)].map((elm,index) => (
            <FontAwesomeIcon icon={faStar} className={`star ${index < hoveredRating ? 'orange' : ''}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStarClick(index)}
              />
      ))}
    </div>
  );
};

export default CustomerStarRating;
