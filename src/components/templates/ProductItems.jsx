import React, { useEffect, useState } from "react";
import AvgStarRating from "./AvgStarRating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide, faArrowUpWideShort,faStar, faFilter ,faFilterCircleXmark, faTrashCan} from '@fortawesome/free-solid-svg-icons';


const ProductItems = ({productItems, deleteCart})=>{

    const [filter, setFilter] = useState(null);
    const [areFiltersApplied, setAreFiltersApplied] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilter = (filterType) => {
        switch (filterType) {
          case 'top-rating':
            setFilter('top-rating');
            setAreFiltersApplied(true);
            setActiveFilter('top-rating');
            break;
          case 'price-high':
            setFilter('price-high');
            setAreFiltersApplied(true);
            setActiveFilter('price-high');
            break;
          case 'price-low':
            setFilter('price-low');
            setAreFiltersApplied(true);
            setActiveFilter('price-low');
            break;
          default:
            setFilter(null); 
            setAreFiltersApplied(false);
            setActiveFilter(null);
            break;
        }
      };
      
      const applyOrClearText = areFiltersApplied ? (
        <span>
          Clear <FontAwesomeIcon icon={faFilterCircleXmark} />
        </span>
      ) : (
        <span>
          Apply <FontAwesomeIcon icon={faFilter} />
        </span>
      );

      const filteredProducts = () => {

        switch (filter) {
          case 'top-rating':
            return productItems.toSorted((a, b) => b.rating - a.rating);
          case 'price-high':
            return productItems.toSorted((a, b) => b.price - a.price);
          case 'price-low':
            return productItems.toSorted((a, b) => a.price - b.price);
          default:
            return productItems;
        }
      };

    return(
        <>
         <div className="product-filters">
         <button onClick={() => handleFilter()} className={areFiltersApplied ? "clear-filter-btn":""} >
          {applyOrClearText}
        </button>
        <button
          onClick={() => handleFilter('top-rating')}
          className={activeFilter === 'top-rating' ? 'active' : ''}
        >
            Top Rating <FontAwesomeIcon icon={faStar} id="filtes-icon" size="lg"/>
        </button>
        <button
          onClick={() => handleFilter('price-high')}
          className={activeFilter === 'price-high' ? 'active' : ''}
        >
          Price High <FontAwesomeIcon icon={faArrowUpWideShort} id="filtes-icon" size="lg"/>
        </button>
        <button
          onClick={() => handleFilter('price-low')}
          className={activeFilter === 'price-low' ? 'active' : ''}
        >
         Price Low <FontAwesomeIcon icon={faArrowDownShortWide} id="filtes-icon"  size="lg"/>

        </button>
       
      </div>
        <div className="searchCategory-products">
        {productItems && filteredProducts()?.map((item,index)=>
        (
        <div className="product-items"  key={index}>
           <Link to={`/estore/search/${item.category}/${item.id}`}>
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
                <AvgStarRating rating={item.rating}/>
                {deleteCart  &&
                <button id="delete-cart" data-icon="remove" onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  deleteCart(item.id)}}>
                  <FontAwesomeIcon icon={faTrashCan}  />
                </button> }
               </div>
           </div>
           </Link>
        </div>
        )             
    )}
    </div>
    </>
    )
};

export default React.memo(ProductItems);