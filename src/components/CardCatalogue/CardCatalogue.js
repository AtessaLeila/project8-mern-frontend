import React from 'react';
import './CardCatalogue.css';
import Counter from '../Counter/Counter'

const CardCatalogue = (props) => {

    return (
        <div>
            <div className="card-container">
                <h3>{props.orderNum} Order Number</h3>
                <div className="placeholder"><h3 style={{ color: "white" }}>Placeholder</h3></div>
                <h4>{props.category}Category of Bakery Item</h4>
                <h5>{props.name}Name of Bakery Item</h5>
                <p>Amount:  <Counter /></p>
            </div>
        </div>
    )
}

export default CardCatalogue; 