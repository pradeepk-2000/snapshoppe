import React from "react";

const MainPage = ()=>{
    return(
        <>
            <div className="bottom-bar">
                <div className="bottom-leftbar">
                    
                </div>
                <div className="bottom-middlebar">

                </div>
                <div className="bottom-rightbar">
                        <div className="bottom-right-topbar"></div>
                        <div className="bottom-right-bottombar"></div>
                </div>
            </div>

            <div className="center-bar">
                {[...Array(5)].map((elm,index)=>
                    (
                    <div className="card-items" key={index}></div>
                    )
                    
                )}
            </div> 
        </>
    )
};
export default MainPage;