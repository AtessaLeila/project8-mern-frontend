import React from 'react';
import './Box.css';
// import Button from '../Button/Button'

const Box = (props) => {

    return (
        <div>
            <div className="sidebar-item-box">
                <div className="item-box-placeholder-img" style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover" }}></div>
                <p>{props._id}</p>
                <p>{props.name}</p>
                <p>{props.unitPrice}</p>
                {/* <Button type="detail" label="Detail" /> */}
            </div>
        </div>
    )
}

export default Box; 