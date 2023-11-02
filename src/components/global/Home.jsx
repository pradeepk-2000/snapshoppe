import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const handleLogout =()=>{
        sessionStorage.removeItem("loginStatus");
        navigate("/login");
    }
    
    return(
        <div className="home-container">
               <p>hellooooo</p>
               <a href="/estore/profile">profile</a>
               <a href="/estore/account">account</a>
               <button onClick={handleLogout}>Logout</button>
                <Outlet/>
            </div>
    )
}
export default React.memo(Home);
// welcome login or create and a pic