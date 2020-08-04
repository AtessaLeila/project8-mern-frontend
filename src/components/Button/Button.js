import React from 'react';
import './Button.css'


const Button = (props) => {
    let classList = [];

    let types = ['confirm', 'ready', 'delivered', 'edit', 'create', 'delete', 'new', 'submitbtn']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    return <button className={classList.join(" ")}>{props.label}</button>
}

export default Button; 