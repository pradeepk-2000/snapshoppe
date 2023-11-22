import React from "react";
import {Comments} from "../constants/constants";

const UserComments = () =>{
    return(
        <div className="store-comments">
            <div className="store-comments-heading">
                Why They Like Us
            </div>
            <div className="user-comments-content">
                {Comments?.map((elm,index)=>(
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
export default React.memo(UserComments);