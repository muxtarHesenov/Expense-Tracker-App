import React from "react";
import "./index.css"

function Modal({isOpen, onClose, children}) {
    return(
        <>
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <div onClick={onClose} className="modal-content-header">
                    <button>x</button>
                </div>
                {children}
            </div>
        </div>
        </>
    );
}


export default Modal;