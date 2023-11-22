import React, { useEffect, useState } from "react";
import { storeApi } from "../helpers/storeapi";
import { uniqueCategories } from "../constants/constants";
import SkeletonProducts from "./SkeletonProducts";
import StarRating from "./StarRating";

const MainProducts = () =>{
    const [products, setProducts] = useState([]);
    const [status,setStatus] = useState(false);
    const api = storeApi();

    useEffect(()=>{
        api.getAllProducts()
        .then((response)=>{
          if(response !== null){
            let products =  response.products;
            const selectedProducts = uniqueCategories.map((category) => {
            const productFromCategory = products?.find((product) => product.category === category);
            return productFromCategory;
                });
                setProducts(selectedProducts);
                setStatus(true);
            }
          else{
              console.log("API ERROR"); 
            }
      })
      .catch((error)=>{
          console.log(error + " Internal error")
      })
    },[]);
    
    return(
        <>
         <div className="top-categories"><span>Top Categories</span></div>
         <div className="main-products">
            {status ?
                    products?.map((item,index)=>
                        {
                            let cat;
                            if (item.category === 'mens-shoes' || item.category === 'womens-shoes') {
                              cat = 'shoes';
                            } else if (item.category === 'mens-watches' || item.category === 'womens-watches') {
                              cat = 'watches';
                            } else {
                              cat = item.category;
                            }

                            return(
                        <div className="product-items" key={index}>
                         <a href={`/estore/search/${cat}`} >
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
                        ) }             
                    )
                    : <SkeletonProducts/>}
         </div>
         </>
    );
}
export default React.memo(MainProducts);