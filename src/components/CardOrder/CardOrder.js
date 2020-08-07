import React from 'react';
import './CardOrder.css'
import {Link} from 'react-router-dom'

const CardOrder = (props) => {

    return (
        <div className="flexbox">
            <Link to={"/orders/id/" + props.id} className="flexbox-link"  onClick={() => {props.setId(props.id) }}>
            <div className="card-order">
                <p>Order Number: {props.orderNumber}</p>
                <p>Customer Name: {props.customer}</p>
                <p>Occasion: {props.occasion}</p>
                <p>Due Date: {props.dueDate}</p>
            </div>
            </Link>
        </div>
    )
}

export default CardOrder; 