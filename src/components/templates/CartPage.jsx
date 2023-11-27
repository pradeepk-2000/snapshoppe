import React, { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/context";
import ProductItems from "./ProductItems";

const CartPage = ()=>{
    const contextData = useContext(CartContext);
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        setCartItems(contextData.cartDetails);
        console.log(contextData.cartDetails);
      }, [contextData.cartDetails]);

    return(
        <div className="cart-page">
      {cartItems !== null ? (
        <ProductItems productItems={cartItems} deleteCart={contextData.editCart}/>
      ) : (
        "No items in the cart ! Please add items to view"
      )}
    </div>
    )
}

export default React.memo(CartPage);