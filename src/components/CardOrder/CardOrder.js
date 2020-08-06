import React from 'react';
import './CardOrder.css'

const CardOrder = (props) => {

    return (
        <div className="flexbox">
            <div className="card-order">
                <p>Order Number: {props.orderNumber}</p>
                <p>Customer Name: {props.customer.name}</p>
                <p>Occasion: {props.occasion}</p>
                <p>Due Date: {props.dueDate}</p>
            </div>
        </div>
    )
}

export default CardOrder; 