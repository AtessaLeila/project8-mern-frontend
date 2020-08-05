import React from 'react';
import './Button.css'


const Button = (props) => {
    let classList = [];

    let types = ['confirm', 'ready', 'delivered', 'edit', 'create', 'delete', 'new', 'submitbtn', 'detail']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}-detail`)
    }

    return <button className={classList.join(" ")}>{props.label}</button>

}

export default Button; 