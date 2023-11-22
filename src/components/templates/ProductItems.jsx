import React from "react";
import StarRating from "./StarRating";

const ProductItems = ({productItems})=>{

    return(
        <>
        {productItems?.map((item,index)=>
        (
        <div className="product-items"  key={index}>
           <a href={`/estore/search/${item.category}/${item.id}`}>
           <div className="product-thumbnail">
               <img src={item.thumbnail} alt={item.title} loading="lazy"/>
           </div>
           <div className="product-item-description">
               <span>{item.title}</span>

               <div className="item-prices">
                   <span id="item-price-strikeoff">${item.price*2}</span> &nbsp;
                   <span>${item.price}</span>
               </div>
               <div className="item-rating">
                <StarRating rating={item.rating}/>
               </div>
           </div>
           </a>
        </div>
        )             
    )}
    </>
    )
};

export default React.memo(ProductItems);