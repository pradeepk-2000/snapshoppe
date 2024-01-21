import React from "react";
import MainProducts from "./MainProducts";
import { carouselImages } from "../constants/constants";
import { saleOffer,daysLeft,newProduct } from "../constants/constants";
import StoreComments from "./StoreComments";
import Features from "./Features";

const MainPage = ()=>{

    return(
        <div className="main-page">
            <div className="mainpage-top">
                <div className="mainpage-top-left">
                    <img src={saleOffer}
                    alt="50% Sale Off"
                    loading="lazy"
                    />
                </div>
                <div className="mainpage-top-middle">
                     <div className='product-container'>
    <div className="product-display carousel">
      {carouselImages.map((product, index) => (
        <div
          key={index}
          className={`advertise-item`}
        >
          <img
            src={product}
            alt={`advertise-${index}`}
            className="advertise-image"
            loading="lazy"
          />
        </div>
      ))}
    </div>
    </div>
                </div>
                <div className="mainpage-top-right">
                        <div className="mainpage-top-right-topbar">
                            <img src={daysLeft} 
                            alt="3 more Days"
                            loading="lazy"/>
                        </div>
                        <div className="mainpage-top-right-bottombar">
                            <img src={newProduct}
                            alt="New Products"
                            loading="lazy"
                            />
                        </div>
                </div>
            </div>
            <div>
                <Features/>
            </div>
            <div className="mainpage-center">
                <MainProducts/>
            </div>
            <div className="store-user-comments">
                <StoreComments/>
            </div>
        </div>
    )
};
export default MainPage;