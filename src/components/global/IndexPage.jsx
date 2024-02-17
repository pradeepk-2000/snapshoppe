import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextStore } from "../contexts/context";
import "../../index.css";

function IndexPage (){

    return(
        <div id="container">
            <ContextStore>
            <BrowserRouter>
                 <App />
            </BrowserRouter>
            </ContextStore>
        </div>
    )
}
export default IndexPage;