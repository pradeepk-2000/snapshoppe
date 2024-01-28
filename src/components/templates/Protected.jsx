import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({children})=>{
    const loginStatus = JSON.parse(sessionStorage.getItem('loginStatus')) || false;

    if(!loginStatus){
        return <Navigate to="/snapshoppe/login"/>
    }

    return children
};
export default Protected;