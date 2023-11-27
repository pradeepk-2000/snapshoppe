import React, { useState } from "react";
import { productReviews } from "../constants/constants";
import AvgStarRating from "./AvgStarRating";
import CustomerStarRating from "./CustomerStarRating";

const ProductReviews =()=>{
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationContent, setNotifictionContent] = useState("");

    const showNotification = () => {
      setNotificationVisible(true);
  
      setTimeout(() => {
        setNotificationVisible(false);
      }, 3000);
    };

    const handleReviewSubmit = () => {
      setNotifictionContent("Review sumitted successfully!");
      showNotification();
    };

    return(
        <div className="product-reviews" id="reviews-scroll">
            <div id="reviews-heading">Reviews</div>
            <div className="user-reviews">
                {productReviews?.map((e,index)=>(
                    <div className="user-review" key={index}>
                        <span>
                            <span className="uName">{e.uName}</span>
                            <span className="uRating"><AvgStarRating rating={e.uRating}/></span>
                        </span>
                        <span className="UReview">{e.uReview}</span>
                    </div>
                ))}
            </div>
            <div className="customer-review">
                <div className="write-review">Write a Review</div>
                <div className="customer-name">
                    <label id="label-name">Your name</label>
                    <input type="text" name="cName" id="customer-input" required />
                </div>
                <div className="customer-comment">
                    <label id="label-review">Your Review</label>
                    <textarea name="cReview" id="customer-input" style={{height:"auto"}} required />
                </div>
                <CustomerStarRating/>
                <button id="customer-review-submit" type="submit" onClick={handleReviewSubmit}>Submit</button>
            </div>
            {notificationVisible && (
        <div className="notification">
          {notificationContent}
        </div>
      )}
        </div>
    )
}
export default ProductReviews;