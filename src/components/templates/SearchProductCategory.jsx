import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storeApi } from "../helpers/storeapi";
import { allCategories } from "../constants/constants";
import SkeletonProducts from "./SkeletonProducts";
import ProductItems from "./ProductItems";

const SearchProductCategory = ()=>{
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [status,setStatus] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const api = storeApi();
    let updatedCategory = category;
        
    if (category === 'shoes') {
      updatedCategory = ['mens-shoes', 'womens-shoes'];
    } else if (category === 'watches') {
      updatedCategory = ['mens-watches', 'womens-watches'];
    }
  
    if (!Array.isArray(updatedCategory)) {
      updatedCategory = [updatedCategory];
    }
    // useEffect(()=>{
    //     // let updatedCategory = category;

    //     if (category === 'mens-shoes') {
    //       updatedCategory = 'shoes';
    //     } else if (category === 'mens-watches') {
    //       updatedCategory = 'watches';
    //     }
      
    //     if(!uniqueCategories.includes(category)){
    //         setCategoryError(true);
    //     }
    //     else{
    //     api.getCategoryProducts(category)
    //     .then((response)=> {
    //         if(response!== null){
    //             setProducts(response.products);
    //             setStatus(true); 
    //             setCategoryError(false);
    //         }
    //         else{
    //             console.log("API ERROR");  
    //         }
    //     }).catch((error)=>{
    //         console.log(error+ " Internal error");
    //     });
    // }
    // },[category]);

    useEffect(() => {
        if(!allCategories.includes(category)){
            setCategoryError(true);
        }
        else{
        const promises = updatedCategory.map((cat) => {
          return api.getCategoryProducts(cat)
            .then((response) => {
              if (response !== null) {
                return response.products;
              } else {
                console.log(`API ERROR for category: ${cat}`);
                return [];
              }
            })
            .catch((error) => {
              console.log(error + " Internal error");
              return [];
            });
        });
    
      
        Promise.all(promises)
          .then((productsArray) => {
            const allProducts = productsArray.flat();
            setProducts(allProducts);
            setStatus(true);
            setCategoryError(false);
          });
        }
      
      }, [category]);
      

    return(
        <div className="category-products">
            {categoryError ? 
            <div>There are no products with {category}...</div> :
            (
            <>
            <div className="top-categories">
                <span>{category}</span>
            </div>
            <div className="searchCategory-products">   
            {status ?
            <ProductItems productItems={products}/>
            : 
            <SkeletonProducts/>}
            </div>
            </>
            )}
        </div>
    )
};
export default React.memo(SearchProductCategory);