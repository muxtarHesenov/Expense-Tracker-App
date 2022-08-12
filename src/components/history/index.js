import React from "react";
import "./index.css";

function History({ history }) {
    return (
        <>
            <ul className="history">
                {
                    history.map((item, index) => (
                        <li key={index}>
                            {item.type === 'income' ? '+' : '-'}
                            {item.value} ₼
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default History