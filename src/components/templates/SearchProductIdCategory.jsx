import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storeApi } from "../helpers/storeapi";
import CartContext from "../contexts/context";
import { useContext } from "react";
import { allCategories, uniqueCategories } from "../constants/constants";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import AvgStarRating from "./AvgStarRating";
import ProductReviews from "./ProductReviews";

const SearchProductIdCategory = ()=>{
    const {category, id} = useParams();
    const [product, setProduct] = useState();
    const [errorStatus,setErrorStatus] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationContent, setNotifictionContent] = useState("");
    const contextData = useContext(CartContext);
    const api = storeApi();

    useEffect(()=>{
        if(id <= 99 && allCategories.includes(category)){
        api.getSpecificProduct(id)
        .then((response)=>{
            if(response!== null && response.id){
                console.log(response);
                setProduct(response);
                setErrorStatus(false);
            }
            else{
                setErrorStatus(true);
                console.log("API Error");
            }
        })
        .catch((error)=>{
            console.log(error + "Network Error");
        })
    }else{
        setErrorStatus(true);
    }
    },[]);

    const handleQuantity = (event) => {
        const value = event.target.value;
            if(value<0){
                setQuantity(1);
            }
            else if( value >product.stock){
                setQuantity(product.stock); 
            }
            else{
                setQuantity(value); 
            }
      };

      const showNotification = () => {
        setNotificationVisible(true);
    
        setTimeout(() => {
          setNotificationVisible(false);
        }, 3000);
      };
    
      const handleAddToCart = () => {
        if (contextData.searchCart(product.id)) {           
          setNotifictionContent('Item is already in the cart!');
        } else {
          contextData.updateCart(product);
          setNotifictionContent('Item added to the cart!');
        }
        showNotification();
      };
  
    return(
        <div className="SearchProductIdCategory">
            {!errorStatus ? <>
            <div className="product-id-info">
               <div className="product-id-image-section">
                    <div className="product-id-thumbnail">
                        <img src={product.thumbnail} alt={product.title}/> 
                    </div>
                    <div className="product-id-subthumbnails">
                        {product?.images?.slice(0, 3).map((elm, index) => (
                            <img src={elm} alt={product.title} key={index} />
                        ))}
                    </div>
               </div>
               <div className="product-id-description">
                <div className="product-id-description-heading">
                    <div className="product-id-title">
                        {product.title}
                    </div>
                    <div className="product-description-review">
                        <span className="description-item-rating"><AvgStarRating rating={product.rating}/></span>
                        <span className="product-id-reviews"><a href="#reviews-scroll">2 reviews</a></span>
                        <span className="product-id-writereview">
                        <a href="#reviews-scroll"><FontAwesomeIcon icon={faPencil} style={{color: "gray", fontSize:"13px"}} />&nbsp;Write a review</a></span>
                    </div>
                </div>
                <div className="product-id-description-details">
                    <table>
                        <tr>
                            <th>Brand :</th>
                            <td>{product.brand}</td>
                        </tr>
                        <tr>
                            <th>Description:</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th>Category :</th>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <th>Stock:</th>
                            <td>{product.stock}</td>
                        </tr>
                        <tr>
                            <th>Price:</th>
                            <td>${product.price}</td>
                        </tr>
                    </table>
                </div>
                <div className="product-id-description-pricing">
                    <div className="product-id-description-quantity">
                            <span>Qty</span>
                            <span><input type="number" name="quantity" id="quantity" min="1" max={product.stock} value={quantity} onChange={handleQuantity}/></span>
                            <span className="quanity-amount">
                              Total Amount :  <span id="total-amount">$ {quantity*product.price}</span>
                              </span>
                    </div>
                    <div className="product-id-description-cartbtn">
                            <button id="cart-btn" onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
               </div>
            </div>
            <ProductReviews/>
            {notificationVisible && (
        <div className="notification">
          {notificationContent}
        </div>
      )}
            </>
            : 
            <div className="wrong-productid" style={{textAlign:"center"}}>
                {`Product with id ${id} not found`}
            </div>}
        </div>
    )
};
export default React.memo(SearchProductIdCategory);

const arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcaH-L3K13303SnUFonvT9Ie_CC0FfHZZVw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcaH-L3K13303SnUFonvT9Ie_CC0FfHZZVw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcaH-L3K13303SnUFonvT9Ie_CC0FfHZZVw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcaH-L3K13303SnUFonvT9Ie_CC0FfHZZVw&usqp=CAU"
]