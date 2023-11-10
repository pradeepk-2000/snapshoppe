import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ()=>{
    const navigate = useNavigate();

    const handleLogout =()=>{
        sessionStorage.removeItem("loginStatus");
        navigate("/login");
    };

    return(
               <button onClick={handleLogout}>Logout</button>
    )
};
export default React.memo(Profile);