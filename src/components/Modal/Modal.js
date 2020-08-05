import React from "react";
import Popup from "reactjs-popup";

const Modal = (props) => {
    let classList = [];

    let types = ['confirm', 'delivered']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }
    return (
        <Popup trigger={<button className={classList.join(" ")}>{props.label}</button>} position="right center">
            <div>{props.content}</div>
        </Popup>
    )

};

export default Modal;

