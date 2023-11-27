import React from "react";
import {storeComments} from "../constants/constants";

const StoreComments = () =>{
    return(
        <div className="store-comments">
            <div className="store-comments-heading">
                Why They Like Us
            </div>
            <div className="user-comments-content">
                {storeComments?.map((elm,index)=>(
                    <div className="user-comments" key={index}>
                            <div className="comment">
                                {elm.comment}
                            </div>
                            <div className="author">
                                {elm.author}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default React.memo(StoreComments);