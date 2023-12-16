import React from "react";

const Features = () =>{

    return(
        <div className="feature-container">
            <div className="feature">
            <img width="50" height="50" src="https://img.icons8.com/dotty/50/free-shipping.png" alt="free-shipping"/>
            <div className="text-container">
                <span>Free Shipping</span>
                <span id="feature-subtext">On all Indian orders or orders above $100</span>
            </div>
            </div>
            <div className="feature">
                <img width="50" height="50" src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/50/external-return-box-shopping-and-ecommerce-smashingstocks-detailed-outline-smashing-stocks.png" alt="return-purchase"/>
                <div className="text-container">
                <span>7 Days Return</span>
                <span id="feature-subtext">Simply return it within 7 days for an exchange</span>
                </div>           
            </div>
            <div className="feature">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/card-in-use.png" alt="Secure Payment"/>
                <div className="text-container">
                <span>100% Payment Secure</span>
                <span id="feature-subtext">Your payment is encrypted and secure.</span>     
                </div>            
            </div>
        </div>
    )
};
export default React.memo(Features);
