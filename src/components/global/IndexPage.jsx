import React from "react";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ContextStore } from "../contexts/context";
import "../../index.css";

function IndexPage (){

    return(
        <div id="container">
            <ContextStore>
            <BrowserRouter basename={"/"}>
                 <App />
            </BrowserRouter>
            </ContextStore>
        </div>
    )
}
export default IndexPage;