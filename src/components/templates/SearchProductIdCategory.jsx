import React from "react";
import { useParams } from "react-router-dom";

const SearchProductIdCategory = ()=>{
    const {category, id} = useParams();

    return(
        <div>
            {`${category} and ${id}`}
        </div>
    )
};
export default React.memo(SearchProductIdCategory);