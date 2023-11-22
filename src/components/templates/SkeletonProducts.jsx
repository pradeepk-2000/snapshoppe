import React from "react";

const SkeletonProducts = ()=>{

    return(
    <>
        {[...new Array(8)].map((elm,index)=>(
            <div className="product-items skeleton-item" key={index}>
                <div className="shimmer-effect"></div>
            </div>
        ))
        }

    </>
    )
};
export default React.memo(SkeletonProducts);