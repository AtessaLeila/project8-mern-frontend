import React from 'react';
import './Box.css';

const Box = (props) => {

    return (
        <div>
            <div className="sidebar-item-box">
                <div className="item-box-placeholder-img"><p style={{ color: "white" }}>Placeholder</p></div>
                <p>{props.name} Name of Item</p>
                <p>{props.price} Price of Item</p>
            </div>
        </div >
    )
}

export default Box; 