import React, { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/context";
import ProductItems from "./ProductItems";

const CartPage = ()=>{
    const contextData = useContext(CartContext);
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        setCartItems(contextData.cartDetails);
        // console.log(contextData.cartDetails);
      }, [contextData.cartDetails]);

    return(
        <div className="cart-page">
      {cartItems !== null && cartItems.length > 0 ?  (
        <ProductItems productItems={cartItems} deleteCart={contextData.editCart}/>
      ) : (
        <div className="cart-error">
        <img id="cart-error-pic" src="https://skoozo.com/assets/img/empty-cart.png" alt="No Items"/>
        </div>
      )}
    </div>
    )
}

export default React.memo(CartPage);