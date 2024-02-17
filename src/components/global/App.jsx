import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"
import Protected from "../templates/Protected";

function App(){
    return(

        <div className="app-container">
            <div className="body-container">
            <Routes>
                <Route index path="/" element={<Login/>}/>
                <Route path="/snapshoppe/*" element={
                        <Protected>
                        <Home/>
                        </Protected>
                    }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </div>
        </div>

    )
}
export default App;