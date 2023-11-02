import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function IndexPage (){

    return(
        <div id="container">
            <BrowserRouter>
                 <App />
            </BrowserRouter>
        </div>
    )
}
export default IndexPage;