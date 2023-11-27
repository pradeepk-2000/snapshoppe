import React, { Component } from "react";

const Context = React.createContext();
export default Context;

export class ContextStore extends Component{
    state={
        cartDetails:null
    }

    setCartDetails = (item) => {
        this.setState((prevState) => ({
          cartDetails: prevState.cartDetails !== null ? [...prevState.cartDetails, item] : [item]
        }));
      };
      

    setCheckCart = (itemId) => {
        return this.state.cartDetails !== null && this.state.cartDetails.some((item) => item.id === itemId);
      };

    setEditCart=(itemId)=>{
        this.setState({ 
           cartDetails : this.state.cartDetails.filter((item)=> item.id!==itemId)
         });
    };

    render(){
        return(
            <Context.Provider 
                value={{
                    ...this.state,
                    updateCart : this.setCartDetails,
                    searchCart: this.setCheckCart,
                    editCart : this.setEditCart,
                }}>
                    {this.props.children}
                </Context.Provider>
        )
    };
};