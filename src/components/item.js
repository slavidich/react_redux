import React from "react";
import { useParams, useLocation } from "react-router-dom";

function item(){
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search) //{query.get('sorting')}

    let params = useParams()
    return (
        <div className="item">
            <p>ITEM: {params.id}</p>
            <p>keys: {query.get('sorting')}</p>
        </div>
    )
}

export default item