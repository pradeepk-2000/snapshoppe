import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPage from "../templates/MainPage";
import Profile from "../templates/Profile";
import SearchProductCategory from "../templates/SearchProductCategory";
import SearchProductIdCategory from "../templates/SearchProductIdCategory";

function Home(){
     
    return(
        <>
        <div className="header-container">
        <Header/>
        </div>

        <div className="home-container">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/cart" element={<div>Cart....</div>} />
                    <Route path="/search/:category" element={<SearchProductCategory/>} />
                    <Route path="/search/:category/:id" element={<SearchProductIdCategory/>} />
                    <Route path="*" element={<div>NotFound</div>}/>
                </Routes>
        </div>
        </>
    )
}
export default React.memo(Home);
