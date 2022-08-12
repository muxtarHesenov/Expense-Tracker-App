import React from "react";
import "./index.css";

function Summary({ total }) {
    return (
        <>
             <div className="summery">
               <h1> {total} ₼ </h1>
                <small>Mövcud balansınız</small>
            </div>
        </>
    );
}


export default Summary