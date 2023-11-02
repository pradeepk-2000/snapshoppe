import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "../templates/Login";
import Signup from "../templates/Signup";
import Header from "./Header";
import Protected from "../templates/Protected";

function App(){
    return(

        <div className="app-container">
             <div className="header-container">
                <Header/>
            </div>
            <div className="body-container">
            <Routes>
                <Route index path="/" element={<Login/>}/>
                <Route path="/estore" element={
                    <Protected>
                       <Home/>
                    </Protected>
                }>
                     <Route path="profile" element={<div>Profile....</div>} />
                     <Route path="account" element={<div>Account....</div>} />
                     <Route path="*" element={<NotFound/>}/>
            </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </div>
        </div>

    )
}
export default App;