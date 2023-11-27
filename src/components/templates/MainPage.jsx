import React, { useEffect, useState } from "react";
import MainProducts from "./MainProducts";
import { carouselImages } from "../constants/constants";
import { saleOffer,daysLeft,newProduct } from "../constants/constants";
import StoreComments from "./StoreComments";

const MainPage = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
          setCurrentIndex((prevIndex) =>
          prevIndex + 1 === carouselImages.length ? 0 : prevIndex + 1
        );  
        },3000);
      },[]);

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
                    <div className="carousel">
                    <img
                      key={currentIndex}
                      src={carouselImages[currentIndex]}
                      alt="imageslides"
                      loading="lazy"
                    />
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